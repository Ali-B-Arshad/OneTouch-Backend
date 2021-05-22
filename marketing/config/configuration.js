module.exports = {
    "user_service_events": {
        "anonymous": "anonymous",
        "event_category": "{{user_id}}",
        "event_action": {
            "Open": "Open",
            "Users": "Users",
            "Teams": "Teams",
            "Profiles": "Profiles",
            "Payment": "Payment",
            "Notificattion": "Notification",
            "Mail": "Mail",
            "AppInsights": "AppInsights",
            "Admin": "Admin"
        },
        // (1001 -1040)- (5001-5040) 
        "unauthorized_event_label": {

            "user_name_avialable": "OT1001: User name verification success.",
            "user_name_avialable_failed": "OT5001: User name verification failed.",

            "user_email_avialable": "OT1002: User email verification success.",
            "user_email_avialable_failed": "OT5002: User email verification failed.",

            "register": "OT1003: User signup successfully.",
            "register_failed": "OT5003: User signup failed.",

            "activation_email_sent": "OT1004: Activation mail sent.",
            "activation_email_failed": "OT5004: Activation mail didnt sent.",

            "facebook_register": "OT1005: Facebook user signup successfully.",
            "facebook_register_failed": "OT5005: Facebook user signup failed.",

            "google_register": "OT1006: Google user signup successfully.",
            "google_register_failed": "OT5006: Google User signup failed.",

            "login_success": "OT1007: Signin via username and password.",
            "wrong_creds": "OT5007: Signin failed due to wrong credential.",
            "email_not_activated": "OT5008: Signin failed due email still not activated.",
            "login_failed": "OT5009: Signin failed via username and password.",
            "login_twostep_request": "OT5010: Signin required two step login.",

            "facebook_login": "OT1011: Signin via facebook.",
            "facebook_login_failed": "OT5011: Signin failed via facebook.",

            "google_login": "OT1012: Signin via google.",
            "google_login_failed": "OT5012: Signin failed via google.",

            "email_verified": "OT1013: User's e-mail verified successfully.",
            "email_not_verified": "OT5013: User's e-mail verification failed.",

            "forgot_password_request": "OT1014: User requested for forgot password.",
            "forgot_password_token_verified": "OT1015: User's forgot password token verified successfully.",
            "forgot_password_token_failed": "OT5014: User's forgot password token verification failed.",

            "reset_password_success": "OT1016: User's password successfully reseted.",
            "reset_password_failed": "OT5016: User's password not reseted.",

            "change_password_success": "OT1017: User's password successfully changed.",
            "change_password_failed": "OT5017: User's password not changed.",

            "mail_activationLink_success": "OT1018: User fetched mail Activation link",
            "mail_activationLink_failed": "OT5018: User cant able to fetch mail Activation link",

            "two_step_login_success": "OT1019: Signin via username and password with two step.",
            "two_step_login_failed": "OT5019: Signin via username and password, but two step login failed.",

            "plan_expired": "OT1020: Users plan expired, and switched to basic plan.",
            "plan_expired_failed": "OT5020: Users plan expired, and cant able to switch account plan as basic.",

            "facebook_redirect_url": "OT1021: User fethed facebook link to sign-up.",
            "google_redirect_url": "OT1022: User fetched google link to sign-up.",
            "signup_redirect_url_failed": "OT5021: User cant able to fetch google link to sign-up.",

            "two_way_auth": "OT1022: User logged in with 2 way authentication",
            "two_way_auth_failed": "OT5022: User cant able to logged in with 2 way authentication",

        },

        // (1041 -1100)- (5041 -5100)
        "authorized_event_label": {
            "change_password": "OT1041: User({{user}})(ID: {{id}}) password has been changed.",
            "change_password_failed": "OT5041: User({{user}})(ID: {{id}}) password can't able to change.",

            "get_userData_success": "OT1042: User({{user}})(ID: {{id}}) fetched all details",
            "get_userData_failed": "OT5042: User({{user}})(ID: {{id}}) cant able to fetch all details",

            "change_plan": "OT1043: User({{user}})(ID: {{id}}) plan has been changed.",
            "change_plan_failed": "OT5043: User({{user}})(ID: {{id}}) plan can't able to change.",

            "change_payment_type": "OT1044: User({{user}})(ID: {{id}}) payment type has been changed.",
            "change_payment_type_failed": "OT5044: User({{user}})(ID: {{id}}) payemnt type can't able to change.",

            "change_twostep": "OT1045: User({{user}})(ID: {{id}}) did changes in two step login options.",
            "change_twostep_failed": "OT5045: User({{user}})(ID: {{id}}) can't able changes in two step login options.",

            "update_profile": "OT1046: User({{user}})(ID: {{id}}) profile updated successfully.",
            "update_profile_failed": "OT5046: User({{user}})(ID: {{id}}) profile can't able to update.",

            "short_url": "OT1047: User({{user}})(ID: {{id}}) fetched short url for ({{url}}).",
            "short_url_failed": "OT5047: User({{user}})(ID: {{id}}) cant able to fetch short url for ({{url}}).",

            "change_shorten_status": "OT1048: User({{user}})(ID: {{id}}) changed shorten status to {{status}}.",
            "change_shorten_status_failed": "OT5048: User({{user}})(ID: {{id}}) cant able to change shorten status to {{status}}.",
        },


        // (1101-1200) - (5101-5200) 
        "team_event_label": {

            "fetch_all_team": "OT1101: User({{user}})(ID: {{id}}) fetched all team details.",
            "fetch_all_team_failed": "OT5101: User({{user}})(ID: {{id}}) cant able to fetch all team details.",

            "fetch_team": "OT1102: User({{user}})(ID: {{id}}) fetched team({{teamId}}) details.",
            "fetch_team_failed": "OT5102: User({{user}})(ID: {{id}}) cant able to fetch team({{teamId}}) details.",

            "fetch_profiles": "OT1103: User({{user}})(ID: {{id}}) fetched all social profiles.",
            "fetch_profiles_failed": "OT5103: User({{user}})(ID: {{id}})  can't able to fetch all social profiles.",

            "create_team": "OT1104: User({{user}})(ID: {{id}}) created a team({{teamId}}).",
            "create_team_failed": "OT5104: User({{user}})(ID: {{id}}) cant able to create a team.",

            "edit_team": "OT1105: User({{user}})(ID: {{id}}) edited a team({{teamId}}).",
            "edit_team_failed": "OT5105: User({{user}})(ID: {{id}}) cant able to edit a team({{teamId}}).",

            "delete_team": "OT1106: User({{user}})(ID: {{id}}) deleted a team({{teamId}}).",
            "delete_team_failed": "OT5106: User({{user}})(ID: {{id}}) cant able to delete a team({{teamId}}).",

            "invite_team": "OT1107: User({{user}})(ID: {{id}}) invited a member({{email}}) for a team({{teamId}}).",
            "invite_team_failed": "OT5107: User({{user}})(ID: {{id}}) cant able to invite a member({{email}}) for a team({{teamId}}).",

            "fetch_team_invitation": "OT1108: User({{user}})(ID: {{id}}) fetched the team invitation.",
            "fetch_team_invitation_failed": "OT5108: User({{user}})(ID: {{id}}) cant able to fetched the team invitations.",

            "accept_team_invitation": "OT1109: User({{user}})(ID: {{id}}) accepted the team({{teamId}}) invitation.",
            "accept_team_invitation_failed": "OT5109: User({{user}})(ID: {{id}}) cant able to accept the team({{teamId}}) invitations.",

            "decline_team_invitation": "OT1110: User({{user}})(ID: {{id}}) declined the team({{teamId}}) invitation.",
            "decline_team_invitation_failed": "OT5110: User({{user}})(ID: {{id}}) cant able to decline the team({{teamId}}) invitations.",

            "withdraw_team_invitation": "OT1111: User({{user}})(ID: {{id}}) withdraw the team({{teamId}}) invitation for email({{email}}).",
            "withdraw_team_invitation_failed": "OT5111: User({{user}})(ID: {{id}}) cant able to withdraw the team({{teamId}}) invitation for email({{email}}).",

            "profile_redirect_url": "OT1112: User({{user}})(ID: {{id}}) fetched redirect url of ({{url}}).",
            "profile_redirect_url_failed": "OT5112: User({{user}})(ID: {{id}}) cant able to fetch redirect url of ({{url}}).",

            "add_social_profile": "OT1113: User({{user}})(ID: {{id}}) added social profile({{profileId}}).",
            "add_social_profile_failed": "OT5113: User({{user}})(ID: {{id}}) cant able to add social profile.",

            "bulk_add_social_profile": "OT1114: User({{user}})(ID: {{id}}) added bulk social profiles to team({{teamId}}).",
            "bulk_add_social_profile_failed": "OT5114: User({{user}})(ID: {{id}}) cant able to add bulk social profiles to team({{teamId}}).",

            "delete_social_profile": "OT1115: User({{user}})(ID: {{id}}) deleted a social profile({{profileId}}).",
            "delete_social_profile_failed": "OT5115: User({{user}})(ID: {{id}}) cant able to delete social profile({{profileId}}).",

            "add_other_team_social_profile": "OT1116: User({{user}})(ID: {{id}}) added a social profile({{profileId}}) to team({{teamId}}).",
            "add_other_team_social_profile_failed": "OT5116: User({{user}})(ID: {{id}}) cant able to add a social profile to other team.",

            "delete_current_team_social_profile": "OT1117: User({{user}})(ID: {{id}}) removed a social profile from the team.",
            "delete_current_team_social_profile_failed": "OT5117: User({{user}})(ID: {{id}}) cant able to remove a social profile from the team.",

            "leave_team": "OT1118: User({{user}})(ID: {{id}}) left from the team of ({{TeamId}}).",
            "leave_team_failed": "OT5118: User({{user}})(ID: {{id}}) can't able to left the team of({{TeamId}}).",

            "edit_permission": "OT1119: User({{user}})(ID: {{id}}) edited the permission of the user({{user1}}).",
            "edit_permission_failed": "OT5119: User({{user}})(ID: {{id}}) can't able to edit the permission of the user({{user1}}).",

            "lock_profiles": "OT1120: User({{user}})(ID: {{id}}) locked some social profiles({{accounts}}).",
            "lock_profiles_failed": "OT5120: User({{user}})(ID: {{id}}) can't able to lock social profiles({{accounts}}).",

            "unlock_profiles": "OT1121: User({{user}})(ID: {{id}}) unlocked some social profiles({{accounts}}).",
            "unlock_profiles_failed": "OT5121: User({{user}})(ID: {{id}}) can't able to unlock social profiles({{accounts}}).",

            "invited_list": "OT1122: User({{user}})(ID: {{id}}) fetched all his invitations sent list.",
            "invited_list_failed": "OT5122: User({{user}})(ID: {{id}}) cant able to fetch all his invitations sent list.",

            "fetch_invited_list": "OT1123: User({{user}})(ID: {{id}}) fetched invited list.",
            "fetch_invited_list_failed": "OT5123: User({{user}})(ID: {{id}}) cant able to fetch invited list.",

            "remove_team_member": "OT1124: User({{user}})(ID: {{id}}) removed a member({{memberId}}) from the Team({{teamId}})",
            "remove_team_member_failed": "OT5124: User({{user}})(ID: {{id}}) cant able to remove a member({{memberId}}) from the Team({{teamId}})",

            "fetch_profiles_byId": "OT1125: User({{user}})(ID: {{id}}) fetched social profile({{accountId}}) details.",
            "fetch_profiles_byId_failed": "OT5125: User({{user}})(ID: {{id}})  can't able to fetch social profile({{accountId}}) details.",

        },

        //(1201-1300)-(5201-5300)
        "profile_event_label": {
            "facebook_page_details": "OT1201: User({{user}})(ID: {{id}}) fetched facebook pages.",
            "facebook_page_details_failed": "OT5201: User({{user}})(ID: {{id}}) cant able to fetch facebook pages.",

            "facebook_group_details": "OT1202: User({{user}})(ID: {{id}}) fetched facebook group details of account({{profileId}}) of team({{teamId}}).",
            "facebook_group_details_failed": "OT5202: User({{user}})(ID: {{id}}) cant able  to fetch facebook group details of account({{profileId}}) of team({{teamId}}).",

            "linkedIn_company_page_details": "OT1203: User({{user}})(ID: {{id}}) fetched linkedIn company pages.",
            "linkedIn_company_page_details_failed": "OT5203: User({{user}})(ID: {{id}}) cant able to fetch linkedIn company pages.",

            "youtube_channel_details": "OT1204: User({{user}})(ID: {{id}}) fetched youtube channel data.",
            "youtube_channel_details_failed": "OT5204: User({{user}})(ID: {{id}}) cant able to fetch youtube channel data.",

            "google_analytics_details": "OT1205: User({{user}})(ID: {{id}}) fetched google analytics data.",
            "google_analytics_details_failed": "OT5205: User({{user}})(ID: {{id}}) cant able to fetch google analytics data.",

            "short_url": "OT1206: User({{user}})(ID: {{id}}) fetched short url for ({{url}}).",
            "short_url_failed": "OT5206: User({{user}})(ID: {{id}}) cant able to fetch short url for ({{url}}).",

            "create_pinterest_board": "OT1207: User({{user}})(ID: {{id}}) created a pinterest board.",
            "create_pinterest_board_failed": "OT5207: User({{user}})(ID: {{id}}) cant able to create a pinterest board.",

            "fetch_pinterest_board": "OT1208: User({{user}})(ID: {{id}}) fetched new pinterest boards of account({{profileId}}).",
            "fetch_pinterest_board_failed": "OT5208: User({{user}})(ID: {{id}}) cant able to fetch new pinterest boards of account({{profileId}}).",

            "delete_pinterest_board": "OT1209: User({{user}})(ID: {{id}}) deleted a pinterest board({{board}}).",
            "delete_pinterest_board_failed": "OT5209: User({{user}})(ID: {{id}}) cant able to delete a pinterest board({{board}}).",

            "facebook_own_group_details": "OT1210: User({{user}})(ID: {{id}}) fetched own facebook group details",
            "facebook_own_group_details_failed": "OT5210: User({{user}})(ID: {{id}}) cant able to fetch own facebook group details",

            "instagram_business_details": "OT1211: User({{user}})(ID: {{id}}) fetched instagram business details.",
            "instagram_business_details_failed": "OT5211: User({{user}})(ID: {{id}}) can't able to fetch instagram business details.",

        },

        //(1301-1350)-(5301-5350)
        "payment_event_label": {

            "fetch_payment_redirect_url": "OT1301: User({{user}})(ID: {{id}}) fetched payment redirect url for plan({{plan}}) of mode({{mode}}) with couponCode({{coupon}}).",
            "fetch_payment_redirect_url_failed": "OT5301: User({{user}})(ID: {{id}}) cant able to fetch payment redirect url for plan({{plan}}) of mode({{mode}}) with couponCode({{coupon}}).",

            "payment_success": "OT1302: User({{user}})(ID: {{id}}) paid successfully.",
            "payment_failed": "OT5302: User({{user}})(ID: {{id}}) cant able to pay in mode({{mode}}).",
            "payment_under_process": "OT1303: User(ID: {{id}}) payment is in under processing.",

            "get_last_payment_info": "OT1304: User({{user}})(ID: {{id}}) fetched last payment data.",
            "get_last_payment_info_failed": "OT5304: User({{user}})(ID: {{id}}) cant able to fetch last payment data.",

            "get_full_payment_history": "OT1305: User({{user}})(ID: {{id}}) fetched full payments history.",
            "get_full_payment_history_failed": "OT5305: User({{user}})(ID: {{id}}) cant able to fetch full payments history.",

            "get_payment_invoice": "OT1306: User({{user}})(ID: {{id}}) downloaded last payment Invoice.",
            "get_payment_invoice_failed": "OT5306: User({{user}})(ID: {{id}}) cant able to download last payment Invoice.",

        },

        //(1351-1450)-(5351-5450)
        "notify_event_lable": {
            "send_team_notification": "OT1351: User({{user}})(ID: {{id}}) sent a team notification to team({{teamId}}).",
            "send_team_notification_failed": "OT5351: User(ID: {{id}}) cant able to send a team notification to team({{teamId}}).",

            "send_user_notification": "OT1352: User(ID: {{id}}) sent a user notification to team({{user}}).",
            "send_user_notification_failed": "OT5352: User(ID: {{id}}) cant able to send a user notification to team({{user}}).",

            "get_user_notification": "OT1353: User(ID: {{id}}) fetched notification of user({{user}}).",
            "get_user_notification_failed": "OT5353: User(ID: {{id}}) cant able to fetch notification of user({{user}}).",
        },

        //(1451-1500)-(5451-5500)
        "emails_event_lable": {
            "email_expire": "OT1451: Admin({{admin}})(ID: {{id}}) sent email to users whos account going to expire in a week.",
            "email_expire_failed": "OT5451: Admin({{admin}})(ID: {{id}}) cant able to send mail to users whos account going to expire in a week.",

            "email_expired": "OT1452: Admin({{admin}})(ID: {{id}}) sent mail to users whos account is expired.",
            "email_expired_failed": "OT5452: Admin({{admin}})(ID: {{id}}) cant able to send mail to users whos account is expired.",

            "recent_login": "OT1453: Admin({{admin}})(ID: {{id}})  sent mail to the last 3 days inactive users.",
            "recent_login_failed": "OT5453: Admin({{admin}})(ID: {{id}}) cant able to send mail to the last 3 days inactive users.",

            "notification_email": "OT1454: Admin({{admin}})(ID: {{id}}) successfully sent notifcation to all active users.",
            "notification_email_failed": "OT5454: Admin({{admin}})(ID: {{id}}) failed to send notifcation to all active users.",

            "mails_sent_list": "OT1455: Admin({{admin}})(ID: {{id}}) fetched sent mails of a perticular user({{user}}).",
            "mails_sent_list_failed": "OT5455: Admin({{admin}})(ID: {{id}}) failed to fetch sent mails of a perticular user({{user}}).",
        },

        //(1501-1550)-(5501-5550)
        "app_insights_event_lable": {

            "get_all_realTime_users": "OT1501: Admin({{admin}})(ID: {{id}}) fetched all real time users data.",
            "get_all_realTime_users_failed": "OT5501: Admin({{admin}})(ID: {{id}}) cant able to fetch all real time users data.",

            "get_all_users": "OT1502: Admin({{admin}})(ID: {{id}}) fetched all user list between {{startdate}} to {{enddate}}.",
            "get_all_users_failed": "OT5502: Admin({{admin}})(ID: {{id}}) cant able to fetch user list between {{startdate}} to {{enddate}}.",

            "get_user_action_count": "OT1503: Admin({{admin}})(ID: {{id}}) fetched action count of user({{user}}).",
            "get_user_action_count_failed": "OT5503: Admin({{admin}})(ID: {{id}}) cant able to fetch action count of user({{user}}).",

            "get_user_activities": "OT1504: Admin({{admin}})(ID: {{id}}) fetched activitites of user({{user}}).",
            "get_user_activities_failed": "OT5504: Admin({{admin}})(ID: {{id}}) cant able to fetch activitites of user({{user}}).",

            "get_user_realTime_activities": "OT1505: Admin({{admin}})(ID: {{id}}) fetched real time activitites of user({{user}}).",
            "get_user_realTime_activities_failed": "OT5505: Admin({{admin}})(ID: {{id}}) cant able to fetch real time activitites of user({{user}}).",

            "get_user_activities_by_action": "OT1506: Admin({{admin}})(ID: {{id}}) fetched activitites of user({{user}}) with action({{action}}).",
            "get_user_activities_by_action_failed": "OT5506: Admin({{admin}})(ID: {{id}}) cant able to fetch activitites of user({{user}}) with action({{action}}).",

            "get_today_action_count": "OT1507: Admin({{admin}})(ID: {{id}}) fetched todays action counts for all users.",
            "get_today_action_count_failed": "OT5507: Admin({{admin}})(ID: {{id}}) cant able to fetch todays action count for all users.",

            "get_user_activities_byDate": "OT1504: Admin({{admin}})(ID: {{id}}) fetched activitites of user({{user}}) between date {{startDate}} to {{endDate}}.",
            "get_user_activities_byDate_failed": "OT5504: Admin({{admin}})(ID: {{id}}) cant able to fetch activitites of user({{user}}) between date {{startDate}} to {{endDate}}.",
        },

        //(1551-1650)-(5551-5650)
        "admin_event_lable": {

            "get_user_stats": "OT1551: Admin({{admin}})(ID: {{id}}) fetched user stats.",
            "get_user_stats_failed": "OT5551: Admin({{admin}})(ID: {{id}}) cant able to fetch user stats.",

            "get_monthly_user_stats": "OT1551: Admin({{admin}})(ID: {{id}}) fetched user monthly stats.",
            "get_monthly_user_stats_failed": "OT5551: Admin({{admin}})(ID: {{id}}) cant able to fetch user monthly stats.",

            "get_users": "OT1553: Admin({{admin}})(ID: {{id}}) fetched all users.",
            "get_users_failed": "OT5553: Admin({{admin}})(ID: {{id}}) cant able to fetch all users.",

            "user_payment_hystory": "OT1554: Admin({{admin}})(ID: {{id}}) fetched user payment history of user({{user}}).",
            "user_payment_hystory_failed": "OT5554: Admin({{admin}})(ID: {{id}}) cant able to fetch user payment history of user({{user}}).",

            "update_user_lock": "OT1555: Admin({{admin}})(ID: {{id}}) updated user({{user}}) activation state.",
            "update_user_lock_failed": "OT5555: Admin({{admin}})(ID: {{id}}) cant able to update user({{user}}) activation state.",

            "update_plan_for_trail": "OT1556: Admin({{admin}})(ID: {{id}}) updated a plan({{planId}}) of trail period days({{days}}) for user({{user}}).",
            "update_plan_for_trail_failed": "OT5556: Admin({{admin}})(ID: {{id}}) cant able to update a plan({{planId}}) of trail period days({{days}}) for user({{user}}).",

            "update_two_step": "OT1557: Admin({{admin}})(ID: {{id}}) updated a user({{user}}) two step verification process to({{value}}).",
            "update_two_step_failed": "OT5557: Admin({{admin}})(ID: {{id}}) updated a user({{user}}) two step verification process to({{value}}).",

            "get_packages": "OT1558: Admin({{admin}})(ID: {{id}}) feteched all packages.",
            "get_packages_failed": "OT5558: Admin({{admin}})(ID: {{id}}) cant able to fetch all packages.",

            "add_packages": "OT1559: Admin({{admin}})(ID: {{id}}) added a package.",
            "add_packages_failed": "OT5559: Admin({{admin}})(ID: {{id}}) cant able to add a package.",

            "edit_packages": "OT1560: Admin({{admin}})(ID: {{id}}) edited a package({{package}}).",
            "edit_packages_failed": "OT5560: Admin({{admin}})(ID: {{id}}) cant able to edit a package({{package}}).",

            "update_package_activation": "OT1561: Admin({{admin}})(ID: {{id}}) updated package({{package}}) status to({{value}}).",
            "update_package_activation_failed": "OT5561: Admin({{admin}})(ID: {{id}}) cant able to update package({{package}}) status to({{value}}).",


            "create_coupons": "OT1562: Admin({{admin}})(ID: {{id}}) created a coupon({{coupon}}).",
            "create_coupons_failed": "OT5562: Admin({{admin}})(ID: {{id}}) cant able to create a coupon({{coupon}}).",

            "change_coupon_status": "OT1563: Admin({{admin}})(ID: {{id}}) changed coupon({{coupon}}) status{{status}}.",
            "change_coupon_status_failed": "OT5563: Admin({{admin}})(ID: {{id}}) cant able to change coupon({{coupon}}) status{{status}}.",

            "get_coupons": "OT1564: Admin({{admin}})(ID: {{id}}) fetched all coupons details.",
            "get_coupons_failed": "OT5564: Admin({{admin}})(ID: {{id}}) cant able to fetch all coupons details.",

            "get_user_applied_coupons": "OT1565: Admin({{admin}})(ID: {{id}}) fetched all coupons used by an user({{user}}).",
            "get_user_applied_coupons_failed": "OT5565: Admin({{admin}})(ID: {{id}}) cant able to fetch all coupons used by an user({{user}}).",

            "get_unverified_payments": "OT1566: Admin({{admin}})(ID: {{id}}) fetched all un-verified payments of payment mode({{type}}).",
            "get_unverified_payments_failed": "OT5566: Admin({{admin}})(ID: {{id}}) cant able to fetch all un-verified payments of payment mode({{type}}).",

            "verify_payment": "OT1567: Admin({{admin}})(ID: {{id}}) verified payment id({{payment}}) of user({{user}}).",
            "verify_payment_failed": "OT5567: Admin({{admin}})(ID: {{id}}) cant able to verify payment id({{payment}}) of user({{user}}).",

            "recent_signup": "OT1568: Admin({{admin}})(ID: {{id}}) fetched recent signup users with filtertype({{filter}})",
            "recent_signup_failed": "OT5568: Admin({{admin}})(ID: {{id}}) cant able to fetch recent signup users with filtertype({{filter}})",

        }

    }
};
