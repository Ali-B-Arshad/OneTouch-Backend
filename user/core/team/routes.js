const routes = require("express").Router();

const teamManagementController = require('./controllers/teammanagement');

routes.get('/getDetails', teamManagementController.getDetails);
routes.get('/getTeamDetails', teamManagementController.getTeamDetails);
routes.get('/getSocialProfiles', teamManagementController.getSocialProfiles);
routes.get('/getSocialProfilesById', teamManagementController.getSocialProfilesById);

routes.post('/create', teamManagementController.createTeam);
routes.post('/edit', teamManagementController.editTeam);
routes.delete('/delete', teamManagementController.deleteTeam);
routes.post('/invite', teamManagementController.inviteTeam);
routes.post('/declineTeamInvitation', teamManagementController.declineTeamInvitation);
routes.get('/getTeamInvitations', teamManagementController.getTeamInvitations);
routes.post('/acceptInvitation', teamManagementController.acceptTeamInvitation);
routes.delete('/withdrawInvitation', teamManagementController.withdrawInvitation);
routes.delete('/removeTeamMember', teamManagementController.removeTeamMember);
routes.get('/getTeamMembers', teamManagementController.getTeamMembers);
routes.get('/getProfileRedirectUrl', teamManagementController.getProfileRedirectUrl);
routes.get('/addSocialProfile', teamManagementController.addSocialProfile);
routes.post('/addBulkSocialProfiles', teamManagementController.addBulkSocialProfiles);
routes.delete('/deleteSocialProfile', teamManagementController.deleteSocialProfile);
routes.post('/addOtherTeamAccount', teamManagementController.addOtherTeamSocialProfiles);
routes.delete('/deleteTeamSocialProfile', teamManagementController.deleteTeamSocialProfile);
routes.post('/leave', teamManagementController.leaveFromTeam);
routes.post('/editMemberPermission', teamManagementController.editTeamMemberPermission);
routes.put('/lockProfiles', teamManagementController.lockProfiles);
routes.put('/unlockProfiles', teamManagementController.unlockProfiles);
routes.get('/getTeamInsights', teamManagementController.getTeamInsights);


module.exports = routes;