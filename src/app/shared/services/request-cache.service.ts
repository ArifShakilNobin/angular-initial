import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { MessageService } from './message.service';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any>;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void
}

const maxAge = 30000; // maximum cache age (ms)

@Injectable()
export class RequestCacheWithMap implements RequestCache {

  cache = new Map<string, RequestCacheEntry>();

  constructor(private messenger: MessageService) { }

  get(req: HttpRequest<any>): HttpResponse<any> {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return new HttpResponse({ status: 404, body: 'Cached response not found' });
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    this.messenger.add(
      `Found ${expired}cached response for "${url}".`);
    return isExpired ? new HttpResponse({ status: 410, body: 'Cached response expired' }) : cached.response;
  }


  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    this.messenger.add(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });

    this.messenger.add(`Request cache size: ${this.cache.size}.`);
  }
}
