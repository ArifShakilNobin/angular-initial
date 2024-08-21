import { environment } from 'src/environment/environment';
import { read } from 'xlsx';

export const applicationUrls = {
  authentication: {
    create: 'create-permission',
    read: 'read-permissions',
    update: 'update-permission',
    delete: 'delete-permission',
  },
  authorization: {
    create: 'create-permission',
    read: 'read-permissions',
    update: 'update-permission',
    delete: 'delete-permission',
  },
  user: {
    login: environment.baseApiUrl + 'user/login',
    create: environment.baseApiUrl + 'user/',
    read: environment.baseApiUrl + 'user/GetUserDetail',
    readById: environment.baseApiUrl + 'user/find/',
    update: environment.baseApiUrl + 'user/UpdateBasicInfo',
    updateUserProfile: environment.baseApiUrl + 'update-user-profile/',
    delete: environment.baseApiUrl + 'user/delete/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department',
    readUsers: environment.baseApiUrl + 'users',
    readUserById: environment.baseApiUrl + 'user/',
    getUserProfile: environment.baseApiUrl + 'get-user-profile/',
    readUserByParams: environment.baseApiUrl + 'findUsers',
    register: environment.baseApiUrl + 'User/register',
    uploadUserProfileImage: environment.baseApiUrl + 'user/UploadProfileImage',
  },
  event:{
    read: environment.baseApiUrl + 'event',
    getByUserId: environment.baseApiUrl + 'event/event-by-userid',
    readByEventId: environment.baseApiUrl + 'event/',
    create: environment.baseApiUrl + 'event',
    update: environment.baseApiUrl + 'event/',
    delete: environment.baseApiUrl + 'event/',
    readByParams: environment.baseApiUrl + 'findEvents',
    readActivitiesCategory: environment.baseApiUrl + '/api/ActivitiesCategory/get-all',
    deleteActivitiesCategory: environment.baseApiUrl + '/api/ActivitiesCategory/delete',
    updateActivitiesCategory: environment.baseApiUrl + '/api/ActivitiesCategory/update',
    createActivitiesCategory: environment.baseApiUrl + '/api/ActivitiesCategory/save',
    checkEmailExist: environment.baseApiUrl + 'UserEvColabType/GetVenueByEmail',
    checkEmailExistForManager: environment.baseApiUrl + 'user/GetUserByEmail',
    checkEmailExistForEventCollaborator: environment.baseApiUrl + 'user/GetUserByEmail',
    createEventCollaborator: environment.baseApiUrl + 'eventmember/AddEventMember',
  },
  vendor:{
    checkEmailExistForEventVendor: environment.baseApiUrl + 'user/GetUserByEmail',
    createEventVendor: environment.baseApiUrl + 'eventmember/AddEventMember',
    deleteEventVendor: environment.baseApiUrl + 'eventmember/delete/',
    getVendorListByEventColabTypeAndEventId: environment.baseApiUrl + 'eventmember/getEventMemberForEvent',


  },
  supplier:{
    checkEmailExistForEventSupplier: environment.baseApiUrl + 'user/GetUserByEmail',
    createEventSupplier: environment.baseApiUrl + 'eventmember/AddEventMember',
    deleteEventSupplier: environment.baseApiUrl + 'eventmember/delete/',
    getSupplierListByEventColabTypeAndEventId: environment.baseApiUrl + 'eventmember/getEventMemberForEvent',
  },
  venue:{
    createVanue: environment.baseApiUrl + 'venue/AddVenueToEvent',
    getVenuForEvent: environment.baseApiUrl + 'venue/getVenuForEvent/',
  },
  eventCollaborator:{
    getEventMemberByColabType: environment.baseApiUrl + 'EventMember/getEventMemberByColabType',
    deleteEventCollaborator: environment.baseApiUrl + 'eventmember/delete/',
  },
  manager: {
    createEventManager: environment.baseApiUrl + 'EventRoleUser/AddEventManagersToEvent',
    getManagerForEvent: environment.baseApiUrl + 'EventRoleUser/GetAllEventManagersByEvent',

  },
  eventType:{
    readEventType: environment.baseApiUrl + 'eventtype',
  },
  module: {
    create: environment.baseApiUrl + 'module',
    read: environment.baseApiUrl + 'module/',
    readById: environment.baseApiUrl + 'module/',
    update: environment.baseApiUrl + 'module/',
    delete: environment.baseApiUrl + 'module/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department',
  },
  permission: {
    create: environment.baseApiUrl + 'permission/',
    read: environment.baseApiUrl + 'permission/',
    readById: environment.baseApiUrl + 'user/find/',
    update: environment.baseApiUrl + 'permission/',
    delete: environment.baseApiUrl + 'permission/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department',
  },
  permissionType: {
    create: environment.baseApiUrl + 'permission/',
    read: environment.baseApiUrl + 'permissionType/',
    readById: environment.baseApiUrl + 'user/find/',
    update: environment.baseApiUrl + 'user/update/',
    delete: environment.baseApiUrl + 'user/delete/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department/',
  },
  role: {
    create: environment.baseApiUrl + 'role',
    read: environment.baseApiUrl + 'role/',
    readById: environment.baseApiUrl + 'role/',
    update: environment.baseApiUrl + 'role',
    delete: environment.baseApiUrl + 'role/',
    saveRolePermission: environment.baseApiUrl + 'saveRolePermission/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department',
  },
  userType: {
    create: environment.baseApiUrl + 'role',
    read: environment.baseApiUrl + 'usertype',
    readById: environment.baseApiUrl + 'role/',
    update: environment.baseApiUrl + 'role/',
    delete: environment.baseApiUrl + 'role/',
    saveRolePermission: environment.baseApiUrl + 'saveRolePermission/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department',
  },
  eventColaborationType: {
    create: environment.baseApiUrl + 'role',
    read: environment.baseApiUrl + 'evcolabtype',
    readById: environment.baseApiUrl + 'role/',
    update: environment.baseApiUrl + 'role/',
    delete: environment.baseApiUrl + 'role/',
    saveRolePermission: environment.baseApiUrl + 'saveRolePermission/',
    readByDepartmentId: environment.baseApiUrl + 'data/users-by-department',
  },
  eventCard: {
    create: environment.baseApiUrl + 'eventcard/AddUpdateEventCard',
    saveDocuments: environment.baseApiUrl + 'eventcard/AddPublicInsuranceFile',
    saveVehicles: environment.baseApiUrl + 'eventcard/AddVehicles',
    getEventCard: environment.baseApiUrl + 'eventcard/geteventcard',
    deleteDocument: environment.baseApiUrl + 'eventcard/RemovePublicInsuranceFile',
    deleteVehicle: environment.baseApiUrl + 'eventcard/RemoveVehicle',
  },
  supplierCard:{
    create: environment.baseApiUrl + 'SupplierCard/addupdatesuppliercard',
    getSupplierCard: environment.baseApiUrl + 'suppliercard/getSuppliercard',
    saveDocuments: environment.baseApiUrl + 'suppliercard/adddocfile',
    deleteDocument: environment.baseApiUrl + 'suppliercard/removedocfile',
    saveVehicles: environment.baseApiUrl + 'suppliercard/addvehicles',
    deleteVehicle: environment.baseApiUrl + 'suppliercard/removevehicle',
    getServices: environment.baseApiUrl + 'api/services/EventServices',
  }
};
