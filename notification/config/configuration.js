module.exports = {
    "user_service_events": {
        "anonymous": "anonymous",
        "event_category": "{{user_id}}",
        "event_action": {
            "Notificattion": "Notification",
            "Mail": "Mail",
        },

        //(4001-4050)-(8001-8050)
        "notify_event_lable": {
            "send_team_notification": "OT4001: User({{user}})(ID: {{id}}) sent a team notification to team({{teamId}}).",
            "send_team_notification_failed": "OT8001: User({{user}})(ID: {{id}}) cant able to send a team notification to team({{teamId}}).",

            "send_user_notification": "OT4002: User({{user}})(ID: {{id}}) sent a user notification to team({{user}}).",
            "send_user_notification_failed": "OT8002: User({{user}})(ID: {{id}}) cant able to send a user notification to team({{user}}).",

            "get_user_notification": "OT4003: User({{user}})(ID: {{id}}) fetched notification of user({{user}}).",
            "get_user_notification_failed": "OT8003: User({{user}})(ID: {{id}}) cant able to fetch notification of user({{user}}).",
        },

        //(4051-4100)-(8051-8100)       
        "emails_event_lable": {
            "email_expire": "OT4051: Admin({{admin}})(ID: {{id}}) sent email to users whos account going to expire in a week.",
            "email_expire_failed": "OT8051: Admin({{admin}})(ID: {{id}}) cant able to send mail to users whos account going to expire in a week.",

            "email_expired": "OT4052: Admin({{admin}})(ID: {{id}}) sent mail to users whos account is expired.",
            "email_expired_failed": "OT8052: Admin({{admin}})(ID: {{id}}) cant able to send mail to users whos account is expired.",

            "recent_login": "OT4053: Admin({{admin}})(ID: {{id}}) sent mail to the last 3 days inactive users.",
            "recent_login_failed": "OT8053: Admin({{admin}})(ID: {{id}}) cant able to send mail to the last 3 days inactive users.",

            "notification_email": "OT4054: Admin({{admin}})(ID: {{id}}) successfully sent notifcation to all active users.",
            "notification_email_failed": "OT8054: Admin({{admin}})(ID: {{id}}) failed to send notifcation to all active users.",

            "mails_sent_list": "OT4055: Admin({{admin}})(ID: {{id}}) fetched sent mails of a perticular user({{user}}).",
            "mails_sent_list_failed": "OT8055: Admin({{admin}})(ID: {{id}}) failed to fetch sent mails of a perticular user({{user}}).",
        }

    }
};
