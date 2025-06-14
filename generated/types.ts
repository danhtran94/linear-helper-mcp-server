export default {
    "scalars": [
        4,
        5,
        7,
        9,
        12,
        17,
        18,
        21,
        22,
        24,
        25,
        27,
        28,
        30,
        35,
        36,
        43,
        57,
        59,
        104,
        106,
        109,
        112,
        113,
        123,
        132,
        133,
        138,
        144,
        145,
        184,
        199,
        214,
        228,
        229,
        235,
        248,
        255,
        257,
        258,
        259,
        269,
        283,
        289,
        305,
        324,
        335,
        338,
        398,
        421,
        422,
        424,
        444,
        445,
        456,
        458,
        459,
        460,
        482,
        502,
        538,
        555,
        559,
        580,
        584,
        587,
        704
    ],
    "types": {
        "CustomerNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "on_CustomerNotificationSubscription": [
                0
            ],
            "on_CustomViewNotificationSubscription": [
                270
            ],
            "on_CycleNotificationSubscription": [
                271
            ],
            "on_LabelNotificationSubscription": [
                272
            ],
            "on_ProjectNotificationSubscription": [
                273
            ],
            "on_InitiativeNotificationSubscription": [
                274
            ],
            "on_TeamNotificationSubscription": [
                275
            ],
            "on_UserNotificationSubscription": [
                276
            ],
            "__typename": [
                7
            ]
        },
        "Entity": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "on_CustomerNotificationSubscription": [
                0
            ],
            "on_CustomViewNotificationSubscription": [
                270
            ],
            "on_CycleNotificationSubscription": [
                271
            ],
            "on_LabelNotificationSubscription": [
                272
            ],
            "on_ProjectNotificationSubscription": [
                273
            ],
            "on_InitiativeNotificationSubscription": [
                274
            ],
            "on_TeamNotificationSubscription": [
                275
            ],
            "on_UserNotificationSubscription": [
                276
            ],
            "on_IssueNotification": [
                277
            ],
            "on_ProjectNotification": [
                279
            ],
            "on_InitiativeNotification": [
                280
            ],
            "on_OauthClientApprovalNotification": [
                281
            ],
            "on_DocumentNotification": [
                284
            ],
            "on_PostNotification": [
                285
            ],
            "on_CustomerNeedNotification": [
                286
            ],
            "on_PullRequestNotification": [
                287
            ],
            "__typename": [
                7
            ]
        },
        "Node": {
            "id": [
                4
            ],
            "on_CustomerNotificationSubscription": [
                0
            ],
            "on_User": [
                6
            ],
            "on_Organization": [
                8
            ],
            "on_Facet": [
                10
            ],
            "on_Team": [
                11
            ],
            "on_WorkflowState": [
                13
            ],
            "on_Issue": [
                16
            ],
            "on_DocumentContent": [
                19
            ],
            "on_Project": [
                20
            ],
            "on_ProjectStatus": [
                23
            ],
            "on_Template": [
                26
            ],
            "on_ProjectUpdate": [
                29
            ],
            "on_Reaction": [
                31
            ],
            "on_Comment": [
                32
            ],
            "on_InitiativeUpdate": [
                33
            ],
            "on_Initiative": [
                34
            ],
            "on_EntityExternalLink": [
                121
            ],
            "on_IntegrationsSettings": [
                122
            ],
            "on_InitiativeHistory": [
                126
            ],
            "on_Post": [
                131
            ],
            "on_ExternalUser": [
                134
            ],
            "on_Favorite": [
                143
            ],
            "on_Cycle": [
                148
            ],
            "on_CustomView": [
                149
            ],
            "on_ViewPreferences": [
                174
            ],
            "on_Document": [
                176
            ],
            "on_Roadmap": [
                177
            ],
            "on_IssueLabel": [
                178
            ],
            "on_ProjectLabel": [
                181
            ],
            "on_Customer": [
                182
            ],
            "on_CustomerStatus": [
                183
            ],
            "on_CustomerTier": [
                185
            ],
            "on_Integration": [
                186
            ],
            "on_Dashboard": [
                187
            ],
            "on_ProjectMilestone": [
                198
            ],
            "on_ProjectHistory": [
                202
            ],
            "on_ProjectRelation": [
                207
            ],
            "on_CustomerNeed": [
                210
            ],
            "on_Attachment": [
                211
            ],
            "on_ProjectAttachment": [
                212
            ],
            "on_Meeting": [
                213
            ],
            "on_IssueHistory": [
                217
            ],
            "on_IssueImport": [
                219
            ],
            "on_IssueRelation": [
                222
            ],
            "on_IssueSuggestion": [
                227
            ],
            "on_TriageResponsibility": [
                234
            ],
            "on_TimeSchedule": [
                237
            ],
            "on_TeamMembership": [
                239
            ],
            "on_GitAutomationState": [
                246
            ],
            "on_GitAutomationTargetBranch": [
                247
            ],
            "on_Webhook": [
                253
            ],
            "on_PaidSubscription": [
                262
            ],
            "on_IssueDraft": [
                265
            ],
            "on_Draft": [
                268
            ],
            "on_CustomViewNotificationSubscription": [
                270
            ],
            "on_CycleNotificationSubscription": [
                271
            ],
            "on_LabelNotificationSubscription": [
                272
            ],
            "on_ProjectNotificationSubscription": [
                273
            ],
            "on_InitiativeNotificationSubscription": [
                274
            ],
            "on_TeamNotificationSubscription": [
                275
            ],
            "on_UserNotificationSubscription": [
                276
            ],
            "on_IssueNotification": [
                277
            ],
            "on_ProjectNotification": [
                279
            ],
            "on_InitiativeNotification": [
                280
            ],
            "on_OauthClientApprovalNotification": [
                281
            ],
            "on_OauthClientApproval": [
                282
            ],
            "on_DocumentNotification": [
                284
            ],
            "on_PostNotification": [
                285
            ],
            "on_CustomerNeedNotification": [
                286
            ],
            "on_PullRequestNotification": [
                287
            ],
            "on_PullRequest": [
                288
            ],
            "on_UserSettings": [
                291
            ],
            "on_SemanticSearchResult": [
                304
            ],
            "on_DocumentSearchResult": [
                308
            ],
            "on_ProjectSearchResult": [
                312
            ],
            "on_IssueSearchResult": [
                315
            ],
            "on_RoadmapToProject": [
                318
            ],
            "on_OrganizationInvite": [
                334
            ],
            "on_IntegrationTemplate": [
                353
            ],
            "on_InitiativeToProject": [
                361
            ],
            "on_InitiativeRelation": [
                364
            ],
            "on_Emoji": [
                369
            ],
            "on_AuditEntry": [
                403
            ],
            "on_ApiKey": [
                417
            ],
            "on_AgentContext": [
                420
            ],
            "on_AgentActivity": [
                423
            ],
            "on_PushSubscription": [
                500
            ],
            "on_OrganizationDomain": [
                537
            ],
            "on_EmailIntakeAddress": [
                653
            ],
            "__typename": [
                7
            ]
        },
        "ID": {},
        "DateTime": {},
        "User": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "displayName": [
                7
            ],
            "email": [
                7
            ],
            "avatarUrl": [
                7
            ],
            "disableReason": [
                7
            ],
            "calendarHash": [
                7
            ],
            "description": [
                7
            ],
            "statusEmoji": [
                7
            ],
            "statusLabel": [
                7
            ],
            "statusUntilAt": [
                5
            ],
            "timezone": [
                7
            ],
            "organization": [
                8
            ],
            "lastSeen": [
                5
            ],
            "initials": [
                7
            ],
            "avatarBackgroundColor": [
                7
            ],
            "guest": [
                12
            ],
            "app": [
                12
            ],
            "active": [
                12
            ],
            "issueDrafts": [
                263,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "drafts": [
                266,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "url": [
                7
            ],
            "assignedIssues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "supervisedIssues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "createdIssues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "createdIssueCount": [
                28
            ],
            "teams": [
                188,
                {
                    "filter": [
                        69
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "teamMemberships": [
                240,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "isMe": [
                12
            ],
            "admin": [
                12
            ],
            "inviteHash": [
                7
            ],
            "gitHubUserId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "String": {},
        "Organization": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "urlKey": [
                7
            ],
            "logoUrl": [
                7
            ],
            "periodUploadVolume": [
                9
            ],
            "facets": [
                10
            ],
            "gitBranchFormat": [
                7
            ],
            "gitLinkbackMessagesEnabled": [
                12
            ],
            "gitPublicLinkbackMessagesEnabled": [
                12
            ],
            "roadmapEnabled": [
                12
            ],
            "projectUpdateReminderFrequencyInWeeks": [
                9
            ],
            "projectUpdateRemindersDay": [
                22
            ],
            "projectUpdateRemindersHour": [
                9
            ],
            "initiativeUpdateReminderFrequencyInWeeks": [
                9
            ],
            "initiativeUpdateRemindersDay": [
                22
            ],
            "initiativeUpdateRemindersHour": [
                9
            ],
            "fiscalYearStartMonth": [
                9
            ],
            "workingDays": [
                9
            ],
            "samlEnabled": [
                12
            ],
            "samlSettings": [
                18
            ],
            "scimEnabled": [
                12
            ],
            "scimSettings": [
                18
            ],
            "allowedAuthServices": [
                7
            ],
            "ipRestrictions": [
                256
            ],
            "deletionRequestedAt": [
                5
            ],
            "trialEndsAt": [
                5
            ],
            "previousUrlKeys": [
                7
            ],
            "allowMembersToInvite": [
                12
            ],
            "restrictTeamCreationToAdmins": [
                12
            ],
            "restrictLabelManagementToAdmins": [
                12
            ],
            "themeSettings": [
                18
            ],
            "releaseChannel": [
                257
            ],
            "customersConfiguration": [
                18
            ],
            "defaultFeedSummarySchedule": [
                133
            ],
            "feedEnabled": [
                12
            ],
            "aiAddonEnabled": [
                12
            ],
            "slaDayCount": [
                258
            ],
            "projectUpdatesReminderFrequency": [
                259
            ],
            "users": [
                190,
                {
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "teams": [
                188,
                {
                    "filter": [
                        69
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectStatuses": [
                23
            ],
            "integrations": [
                260,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "subscription": [
                262
            ],
            "userCount": [
                28
            ],
            "createdIssueCount": [
                28
            ],
            "templates": [
                249,
                {
                    "filter": [
                        60
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "labels": [
                179,
                {
                    "filter": [
                        66
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectLabels": [
                203,
                {
                    "filter": [
                        108
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "customerCount": [
                28
            ],
            "customersEnabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "Float": {},
        "Facet": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "sortOrder": [
                9
            ],
            "sourceOrganization": [
                8
            ],
            "sourceTeam": [
                11
            ],
            "sourceProject": [
                20
            ],
            "sourceInitiative": [
                34
            ],
            "sourceFeedUser": [
                6
            ],
            "sourcePage": [
                255
            ],
            "targetCustomView": [
                149
            ],
            "__typename": [
                7
            ]
        },
        "Team": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "key": [
                7
            ],
            "description": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "organization": [
                8
            ],
            "parent": [
                11
            ],
            "children": [
                11
            ],
            "cyclesEnabled": [
                12
            ],
            "cycleStartDay": [
                9
            ],
            "cycleDuration": [
                9
            ],
            "cycleCooldownTime": [
                9
            ],
            "cycleIssueAutoAssignStarted": [
                12
            ],
            "cycleIssueAutoAssignCompleted": [
                12
            ],
            "cycleLockToActive": [
                12
            ],
            "upcomingCycleCount": [
                9
            ],
            "timezone": [
                7
            ],
            "inviteHash": [
                7
            ],
            "inheritWorkflowStatuses": [
                12
            ],
            "inheritIssueEstimation": [
                12
            ],
            "issueEstimationType": [
                7
            ],
            "issueOrderingNoPriorityFirst": [
                12
            ],
            "issueEstimationAllowZero": [
                12
            ],
            "setIssueSortOrderOnStateChange": [
                7
            ],
            "issueEstimationExtended": [
                12
            ],
            "defaultIssueEstimate": [
                9
            ],
            "triageEnabled": [
                12
            ],
            "requirePriorityToLeaveTriage": [
                12
            ],
            "defaultIssueState": [
                13
            ],
            "defaultTemplateForMembers": [
                26
            ],
            "defaultTemplateForMembersId": [
                7
            ],
            "defaultTemplateForNonMembers": [
                26
            ],
            "defaultTemplateForNonMembersId": [
                7
            ],
            "defaultProjectTemplate": [
                26
            ],
            "triageIssueState": [
                13
            ],
            "private": [
                12
            ],
            "facets": [
                10
            ],
            "posts": [
                131
            ],
            "scimManaged": [
                12
            ],
            "scimGroupName": [
                7
            ],
            "progressHistory": [
                18
            ],
            "currentProgress": [
                18
            ],
            "draftWorkflowState": [
                13
            ],
            "startWorkflowState": [
                13
            ],
            "reviewWorkflowState": [
                13
            ],
            "mergeableWorkflowState": [
                13
            ],
            "mergeWorkflowState": [
                13
            ],
            "groupIssueHistory": [
                12
            ],
            "aiThreadSummariesEnabled": [
                12
            ],
            "slackNewIssue": [
                12
            ],
            "slackIssueComments": [
                12
            ],
            "slackIssueStatuses": [
                12
            ],
            "autoClosePeriod": [
                9
            ],
            "autoCloseStateId": [
                7
            ],
            "autoArchivePeriod": [
                9
            ],
            "autoCloseParentIssues": [
                12
            ],
            "autoCloseChildIssues": [
                12
            ],
            "markedAsDuplicateWorkflowState": [
                13
            ],
            "joinByDefault": [
                12
            ],
            "cycleCalenderUrl": [
                7
            ],
            "displayName": [
                7
            ],
            "issues": [
                14,
                {
                    "includeSubTeams": [
                        12
                    ],
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issueCount": [
                28,
                {
                    "includeArchived": [
                        12
                    ]
                }
            ],
            "cycles": [
                231,
                {
                    "filter": [
                        233
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "activeCycle": [
                148
            ],
            "triageResponsibility": [
                234
            ],
            "members": [
                190,
                {
                    "filter": [
                        68
                    ],
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "membership": [
                239,
                {
                    "userId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "memberships": [
                240,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projects": [
                37,
                {
                    "includeSubTeams": [
                        12
                    ],
                    "filter": [
                        40
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sort": [
                        110,
                        "[ProjectSortInput!]"
                    ]
                }
            ],
            "states": [
                242,
                {
                    "filter": [
                        99
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "gitAutomationStates": [
                244,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "templates": [
                249,
                {
                    "filter": [
                        60
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "labels": [
                179,
                {
                    "filter": [
                        66
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "webhooks": [
                251,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "integrationsSettings": [
                122
            ],
            "issueSortOrderDefaultToBottom": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "Boolean": {},
        "WorkflowState": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "type": [
                7
            ],
            "team": [
                11
            ],
            "inheritedFrom": [
                13
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "IssueConnection": {
            "edges": [
                15
            ],
            "nodes": [
                16
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IssueEdge": {
            "node": [
                16
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Issue": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "number": [
                9
            ],
            "title": [
                7
            ],
            "priority": [
                9
            ],
            "estimate": [
                9
            ],
            "boardOrder": [
                9
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "startedAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "startedTriageAt": [
                5
            ],
            "triagedAt": [
                5
            ],
            "canceledAt": [
                5
            ],
            "autoClosedAt": [
                5
            ],
            "autoArchivedAt": [
                5
            ],
            "dueDate": [
                17
            ],
            "slaStartedAt": [
                5
            ],
            "slaMediumRiskAt": [
                5
            ],
            "slaHighRiskAt": [
                5
            ],
            "slaBreachesAt": [
                5
            ],
            "slaType": [
                7
            ],
            "addedToProjectAt": [
                5
            ],
            "addedToCycleAt": [
                5
            ],
            "addedToTeamAt": [
                5
            ],
            "trashed": [
                12
            ],
            "snoozedUntilAt": [
                5
            ],
            "suggestionsGeneratedAt": [
                5
            ],
            "activitySummary": [
                18
            ],
            "documentContent": [
                19
            ],
            "labelIds": [
                7
            ],
            "team": [
                11
            ],
            "cycle": [
                148
            ],
            "project": [
                20
            ],
            "projectMilestone": [
                198
            ],
            "lastAppliedTemplate": [
                26
            ],
            "recurringIssueTemplate": [
                26
            ],
            "previousIdentifiers": [
                7
            ],
            "creator": [
                6
            ],
            "externalUserCreator": [
                134
            ],
            "assignee": [
                6
            ],
            "supervisor": [
                6
            ],
            "snoozedBy": [
                6
            ],
            "state": [
                13
            ],
            "subIssueSortOrder": [
                9
            ],
            "reactionData": [
                18
            ],
            "priorityLabel": [
                7
            ],
            "sourceComment": [
                32
            ],
            "integrationSourceType": [
                214
            ],
            "botActor": [
                135
            ],
            "favorite": [
                143
            ],
            "identifier": [
                7
            ],
            "url": [
                7
            ],
            "branchName": [
                7
            ],
            "customerTicketCount": [
                28
            ],
            "subscribers": [
                190,
                {
                    "filter": [
                        68
                    ],
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "parent": [
                16
            ],
            "children": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "history": [
                215,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "labels": [
                179,
                {
                    "filter": [
                        66
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "relations": [
                220,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "inverseRelations": [
                220,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "attachments": [
                223,
                {
                    "filter": [
                        102
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "formerAttachments": [
                223,
                {
                    "filter": [
                        102
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "description": [
                7
            ],
            "descriptionState": [
                7
            ],
            "reactions": [
                31
            ],
            "needs": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "formerNeeds": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "syncedWith": [
                137
            ],
            "suggestions": [
                225,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "incomingSuggestions": [
                225,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "TimelessDate": {},
        "JSONObject": {},
        "DocumentContent": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "content": [
                7
            ],
            "contentState": [
                7
            ],
            "issue": [
                16
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "projectMilestone": [
                198
            ],
            "document": [
                176
            ],
            "meeting": [
                213
            ],
            "restoredAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "Project": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "updateReminderFrequencyInWeeks": [
                9
            ],
            "updateReminderFrequency": [
                9
            ],
            "frequencyResolution": [
                21
            ],
            "updateRemindersDay": [
                22
            ],
            "updateRemindersHour": [
                9
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "documentContent": [
                19
            ],
            "slugId": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "status": [
                23
            ],
            "creator": [
                6
            ],
            "lead": [
                6
            ],
            "facets": [
                10
            ],
            "projectUpdateRemindersPausedUntilAt": [
                5
            ],
            "startDate": [
                17
            ],
            "startDateResolution": [
                25
            ],
            "targetDate": [
                17
            ],
            "targetDateResolution": [
                25
            ],
            "startedAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "canceledAt": [
                5
            ],
            "autoArchivedAt": [
                5
            ],
            "trashed": [
                12
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "convertedFromIssue": [
                16
            ],
            "lastAppliedTemplate": [
                26
            ],
            "priority": [
                28
            ],
            "lastUpdate": [
                29
            ],
            "health": [
                30
            ],
            "healthUpdatedAt": [
                5
            ],
            "issueCountHistory": [
                9
            ],
            "completedIssueCountHistory": [
                9
            ],
            "scopeHistory": [
                9
            ],
            "completedScopeHistory": [
                9
            ],
            "inProgressScopeHistory": [
                9
            ],
            "progressHistory": [
                18
            ],
            "currentProgress": [
                18
            ],
            "slackNewIssue": [
                12
            ],
            "slackIssueComments": [
                12
            ],
            "slackIssueStatuses": [
                12
            ],
            "labelIds": [
                7
            ],
            "favorite": [
                143
            ],
            "url": [
                7
            ],
            "initiatives": [
                127,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "teams": [
                188,
                {
                    "filter": [
                        69
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "members": [
                190,
                {
                    "filter": [
                        68
                    ],
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectUpdates": [
                192,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "documents": [
                194,
                {
                    "filter": [
                        77
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectMilestones": [
                196,
                {
                    "filter": [
                        89
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "externalLinks": [
                119,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "history": [
                200,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "labels": [
                203,
                {
                    "filter": [
                        108
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "progress": [
                9
            ],
            "scope": [
                9
            ],
            "integrationsSettings": [
                122
            ],
            "content": [
                7
            ],
            "contentState": [
                7
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "relations": [
                205,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "inverseRelations": [
                205,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "needs": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "state": [
                7
            ],
            "priorityLabel": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "FrequencyResolutionType": {},
        "Day": {},
        "ProjectStatus": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "type": [
                24
            ],
            "indefinite": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusType": {},
        "DateResolutionType": {},
        "Template": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "templateData": [
                27
            ],
            "sortOrder": [
                9
            ],
            "organization": [
                8
            ],
            "team": [
                11
            ],
            "creator": [
                6
            ],
            "lastUpdatedBy": [
                6
            ],
            "inheritedFrom": [
                26
            ],
            "__typename": [
                7
            ]
        },
        "JSON": {},
        "Int": {},
        "ProjectUpdate": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "body": [
                7
            ],
            "editedAt": [
                5
            ],
            "reactionData": [
                18
            ],
            "bodyData": [
                7
            ],
            "slugId": [
                7
            ],
            "project": [
                20
            ],
            "health": [
                30
            ],
            "user": [
                6
            ],
            "infoSnapshot": [
                18
            ],
            "isDiffHidden": [
                12
            ],
            "url": [
                7
            ],
            "isStale": [
                12
            ],
            "diff": [
                18
            ],
            "diffMarkdown": [
                7
            ],
            "reactions": [
                31
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateHealthType": {},
        "Reaction": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "emoji": [
                7
            ],
            "issue": [
                16
            ],
            "comment": [
                32
            ],
            "projectUpdate": [
                29
            ],
            "initiativeUpdate": [
                33
            ],
            "post": [
                131
            ],
            "user": [
                6
            ],
            "externalUser": [
                134
            ],
            "__typename": [
                7
            ]
        },
        "Comment": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "body": [
                7
            ],
            "issue": [
                16
            ],
            "documentContent": [
                19
            ],
            "projectUpdate": [
                29
            ],
            "initiativeUpdate": [
                33
            ],
            "post": [
                131
            ],
            "parent": [
                32
            ],
            "resolvingUser": [
                6
            ],
            "resolvedAt": [
                5
            ],
            "resolvingComment": [
                32
            ],
            "user": [
                6
            ],
            "externalUser": [
                134
            ],
            "editedAt": [
                5
            ],
            "bodyData": [
                7
            ],
            "quotedText": [
                7
            ],
            "reactionData": [
                18
            ],
            "threadSummary": [
                18
            ],
            "url": [
                7
            ],
            "children": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "botActor": [
                135
            ],
            "externalThread": [
                136
            ],
            "reactions": [
                31
            ],
            "syncedWith": [
                137
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdate": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "body": [
                7
            ],
            "editedAt": [
                5
            ],
            "reactionData": [
                18
            ],
            "bodyData": [
                7
            ],
            "slugId": [
                7
            ],
            "initiative": [
                34
            ],
            "user": [
                6
            ],
            "health": [
                36
            ],
            "infoSnapshot": [
                18
            ],
            "isDiffHidden": [
                12
            ],
            "url": [
                7
            ],
            "isStale": [
                12
            ],
            "diff": [
                18
            ],
            "diffMarkdown": [
                7
            ],
            "reactions": [
                31
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "Initiative": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "updateReminderFrequencyInWeeks": [
                9
            ],
            "updateReminderFrequency": [
                9
            ],
            "frequencyResolution": [
                21
            ],
            "updateRemindersDay": [
                22
            ],
            "updateRemindersHour": [
                9
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "organization": [
                8
            ],
            "creator": [
                6
            ],
            "owner": [
                6
            ],
            "slugId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "color": [
                7
            ],
            "icon": [
                7
            ],
            "trashed": [
                12
            ],
            "facets": [
                10
            ],
            "targetDate": [
                17
            ],
            "targetDateResolution": [
                25
            ],
            "status": [
                35
            ],
            "lastUpdate": [
                33
            ],
            "health": [
                36
            ],
            "healthUpdatedAt": [
                5
            ],
            "startedAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "url": [
                7
            ],
            "projects": [
                37,
                {
                    "includeSubInitiatives": [
                        12
                    ],
                    "filter": [
                        40
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sort": [
                        110,
                        "[ProjectSortInput!]"
                    ]
                }
            ],
            "links": [
                119,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "integrationsSettings": [
                122
            ],
            "history": [
                124,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "subInitiatives": [
                127,
                {
                    "filter": [
                        78
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "content": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeStatus": {},
        "InitiativeUpdateHealthType": {},
        "ProjectConnection": {
            "edges": [
                38
            ],
            "nodes": [
                20
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectEdge": {
            "node": [
                20
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "PageInfo": {
            "hasPreviousPage": [
                12
            ],
            "hasNextPage": [
                12
            ],
            "startCursor": [
                7
            ],
            "endCursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "state": [
                44
            ],
            "status": [
                45
            ],
            "priority": [
                48
            ],
            "labels": [
                49
            ],
            "searchableContent": [
                82
            ],
            "completedAt": [
                55
            ],
            "canceledAt": [
                55
            ],
            "startDate": [
                55
            ],
            "targetDate": [
                55
            ],
            "health": [
                44
            ],
            "healthWithAge": [
                44
            ],
            "activityType": [
                44
            ],
            "hasRelatedRelations": [
                83
            ],
            "hasDependedOnByRelations": [
                83
            ],
            "hasDependsOnRelations": [
                83
            ],
            "hasBlockedByRelations": [
                83
            ],
            "hasBlockingRelations": [
                83
            ],
            "hasViolatedRelations": [
                83
            ],
            "projectUpdates": [
                84
            ],
            "creator": [
                68
            ],
            "lead": [
                51
            ],
            "members": [
                67
            ],
            "issues": [
                52
            ],
            "roadmaps": [
                86
            ],
            "initiatives": [
                79
            ],
            "projectMilestones": [
                88
            ],
            "completedProjectMilestones": [
                88
            ],
            "nextProjectMilestone": [
                89
            ],
            "accessibleTeams": [
                90
            ],
            "lastAppliedTemplate": [
                60
            ],
            "needs": [
                80
            ],
            "customerCount": [
                46
            ],
            "and": [
                40
            ],
            "or": [
                40
            ],
            "__typename": [
                7
            ]
        },
        "IDComparator": {
            "eq": [
                4
            ],
            "neq": [
                4
            ],
            "in": [
                4
            ],
            "nin": [
                4
            ],
            "__typename": [
                7
            ]
        },
        "DateComparator": {
            "eq": [
                43
            ],
            "neq": [
                43
            ],
            "in": [
                43
            ],
            "nin": [
                43
            ],
            "lt": [
                43
            ],
            "lte": [
                43
            ],
            "gt": [
                43
            ],
            "gte": [
                43
            ],
            "__typename": [
                7
            ]
        },
        "DateTimeOrDuration": {},
        "StringComparator": {
            "eq": [
                7
            ],
            "neq": [
                7
            ],
            "in": [
                7
            ],
            "nin": [
                7
            ],
            "eqIgnoreCase": [
                7
            ],
            "neqIgnoreCase": [
                7
            ],
            "startsWith": [
                7
            ],
            "startsWithIgnoreCase": [
                7
            ],
            "notStartsWith": [
                7
            ],
            "endsWith": [
                7
            ],
            "notEndsWith": [
                7
            ],
            "contains": [
                7
            ],
            "containsIgnoreCase": [
                7
            ],
            "notContains": [
                7
            ],
            "notContainsIgnoreCase": [
                7
            ],
            "containsIgnoreCaseAndAccent": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "description": [
                44
            ],
            "position": [
                46
            ],
            "type": [
                44
            ],
            "projects": [
                47
            ],
            "and": [
                45
            ],
            "or": [
                45
            ],
            "__typename": [
                7
            ]
        },
        "NumberComparator": {
            "eq": [
                9
            ],
            "neq": [
                9
            ],
            "in": [
                9
            ],
            "nin": [
                9
            ],
            "lt": [
                9
            ],
            "lte": [
                9
            ],
            "gt": [
                9
            ],
            "gte": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ProjectCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "state": [
                44
            ],
            "status": [
                45
            ],
            "priority": [
                48
            ],
            "labels": [
                49
            ],
            "searchableContent": [
                82
            ],
            "completedAt": [
                55
            ],
            "canceledAt": [
                55
            ],
            "startDate": [
                55
            ],
            "targetDate": [
                55
            ],
            "health": [
                44
            ],
            "healthWithAge": [
                44
            ],
            "activityType": [
                44
            ],
            "hasRelatedRelations": [
                83
            ],
            "hasDependedOnByRelations": [
                83
            ],
            "hasDependsOnRelations": [
                83
            ],
            "hasBlockedByRelations": [
                83
            ],
            "hasBlockingRelations": [
                83
            ],
            "hasViolatedRelations": [
                83
            ],
            "projectUpdates": [
                84
            ],
            "creator": [
                68
            ],
            "lead": [
                51
            ],
            "members": [
                67
            ],
            "issues": [
                52
            ],
            "roadmaps": [
                86
            ],
            "initiatives": [
                79
            ],
            "projectMilestones": [
                88
            ],
            "completedProjectMilestones": [
                88
            ],
            "nextProjectMilestone": [
                89
            ],
            "accessibleTeams": [
                90
            ],
            "lastAppliedTemplate": [
                60
            ],
            "needs": [
                80
            ],
            "customerCount": [
                46
            ],
            "and": [
                47
            ],
            "or": [
                47
            ],
            "some": [
                40
            ],
            "every": [
                40
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "NullableNumberComparator": {
            "eq": [
                9
            ],
            "neq": [
                9
            ],
            "in": [
                9
            ],
            "nin": [
                9
            ],
            "null": [
                12
            ],
            "lt": [
                9
            ],
            "lte": [
                9
            ],
            "gt": [
                9
            ],
            "gte": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ProjectLabelCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "isGroup": [
                50
            ],
            "creator": [
                51
            ],
            "parent": [
                108
            ],
            "null": [
                12
            ],
            "and": [
                49
            ],
            "or": [
                49
            ],
            "some": [
                49
            ],
            "every": [
                108
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "BooleanComparator": {
            "eq": [
                12
            ],
            "neq": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NullableUserFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "displayName": [
                44
            ],
            "email": [
                44
            ],
            "active": [
                50
            ],
            "assignedIssues": [
                52
            ],
            "admin": [
                50
            ],
            "invited": [
                50
            ],
            "app": [
                50
            ],
            "isMe": [
                50
            ],
            "null": [
                12
            ],
            "and": [
                51
            ],
            "or": [
                51
            ],
            "__typename": [
                7
            ]
        },
        "IssueCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "number": [
                46
            ],
            "title": [
                44
            ],
            "description": [
                53
            ],
            "priority": [
                48
            ],
            "estimate": [
                54
            ],
            "startedAt": [
                55
            ],
            "triagedAt": [
                55
            ],
            "completedAt": [
                55
            ],
            "canceledAt": [
                55
            ],
            "archivedAt": [
                55
            ],
            "autoClosedAt": [
                55
            ],
            "autoArchivedAt": [
                55
            ],
            "addedToCycleAt": [
                55
            ],
            "addedToCyclePeriod": [
                56
            ],
            "dueDate": [
                58
            ],
            "snoozedUntilAt": [
                55
            ],
            "assignee": [
                51
            ],
            "lastAppliedTemplate": [
                60
            ],
            "recurringIssueTemplate": [
                60
            ],
            "sourceMetadata": [
                61
            ],
            "creator": [
                51
            ],
            "parent": [
                63
            ],
            "snoozedBy": [
                51
            ],
            "labels": [
                64
            ],
            "subscribers": [
                67
            ],
            "team": [
                69
            ],
            "projectMilestone": [
                70
            ],
            "comments": [
                71
            ],
            "cycle": [
                98
            ],
            "project": [
                81
            ],
            "state": [
                99
            ],
            "children": [
                52
            ],
            "attachments": [
                100
            ],
            "searchableContent": [
                82
            ],
            "hasRelatedRelations": [
                83
            ],
            "hasDuplicateRelations": [
                83
            ],
            "hasBlockedByRelations": [
                83
            ],
            "hasBlockingRelations": [
                83
            ],
            "hasSuggestedRelatedIssues": [
                83
            ],
            "hasSuggestedSimilarIssues": [
                83
            ],
            "hasSuggestedAssignees": [
                83
            ],
            "hasSuggestedProjects": [
                83
            ],
            "hasSuggestedLabels": [
                83
            ],
            "slaStatus": [
                103
            ],
            "reactions": [
                73
            ],
            "needs": [
                80
            ],
            "customerCount": [
                46
            ],
            "leadTime": [
                105
            ],
            "cycleTime": [
                105
            ],
            "ageTime": [
                105
            ],
            "triageTime": [
                105
            ],
            "and": [
                52
            ],
            "or": [
                52
            ],
            "some": [
                107
            ],
            "every": [
                107
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "NullableStringComparator": {
            "eq": [
                7
            ],
            "neq": [
                7
            ],
            "in": [
                7
            ],
            "nin": [
                7
            ],
            "null": [
                12
            ],
            "eqIgnoreCase": [
                7
            ],
            "neqIgnoreCase": [
                7
            ],
            "startsWith": [
                7
            ],
            "startsWithIgnoreCase": [
                7
            ],
            "notStartsWith": [
                7
            ],
            "endsWith": [
                7
            ],
            "notEndsWith": [
                7
            ],
            "contains": [
                7
            ],
            "containsIgnoreCase": [
                7
            ],
            "notContains": [
                7
            ],
            "notContainsIgnoreCase": [
                7
            ],
            "containsIgnoreCaseAndAccent": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EstimateComparator": {
            "eq": [
                9
            ],
            "neq": [
                9
            ],
            "in": [
                9
            ],
            "nin": [
                9
            ],
            "null": [
                12
            ],
            "lt": [
                9
            ],
            "lte": [
                9
            ],
            "gt": [
                9
            ],
            "gte": [
                9
            ],
            "or": [
                48
            ],
            "and": [
                48
            ],
            "__typename": [
                7
            ]
        },
        "NullableDateComparator": {
            "eq": [
                43
            ],
            "neq": [
                43
            ],
            "in": [
                43
            ],
            "nin": [
                43
            ],
            "null": [
                12
            ],
            "lt": [
                43
            ],
            "lte": [
                43
            ],
            "gt": [
                43
            ],
            "gte": [
                43
            ],
            "__typename": [
                7
            ]
        },
        "CyclePeriodComparator": {
            "eq": [
                57
            ],
            "neq": [
                57
            ],
            "in": [
                57
            ],
            "nin": [
                57
            ],
            "null": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CyclePeriod": {},
        "NullableTimelessDateComparator": {
            "eq": [
                59
            ],
            "neq": [
                59
            ],
            "in": [
                59
            ],
            "nin": [
                59
            ],
            "null": [
                12
            ],
            "lt": [
                59
            ],
            "lte": [
                59
            ],
            "gt": [
                59
            ],
            "gte": [
                59
            ],
            "__typename": [
                7
            ]
        },
        "TimelessDateOrDuration": {},
        "NullableTemplateFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "type": [
                44
            ],
            "null": [
                12
            ],
            "and": [
                60
            ],
            "or": [
                60
            ],
            "__typename": [
                7
            ]
        },
        "SourceMetadataComparator": {
            "eq": [
                7
            ],
            "neq": [
                7
            ],
            "in": [
                7
            ],
            "nin": [
                7
            ],
            "null": [
                12
            ],
            "subType": [
                62
            ],
            "__typename": [
                7
            ]
        },
        "SubTypeComparator": {
            "eq": [
                7
            ],
            "neq": [
                7
            ],
            "in": [
                7
            ],
            "nin": [
                7
            ],
            "null": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NullableIssueFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "number": [
                46
            ],
            "title": [
                44
            ],
            "description": [
                53
            ],
            "priority": [
                48
            ],
            "estimate": [
                54
            ],
            "startedAt": [
                55
            ],
            "triagedAt": [
                55
            ],
            "completedAt": [
                55
            ],
            "canceledAt": [
                55
            ],
            "archivedAt": [
                55
            ],
            "autoClosedAt": [
                55
            ],
            "autoArchivedAt": [
                55
            ],
            "addedToCycleAt": [
                55
            ],
            "addedToCyclePeriod": [
                56
            ],
            "dueDate": [
                58
            ],
            "snoozedUntilAt": [
                55
            ],
            "assignee": [
                51
            ],
            "lastAppliedTemplate": [
                60
            ],
            "recurringIssueTemplate": [
                60
            ],
            "sourceMetadata": [
                61
            ],
            "creator": [
                51
            ],
            "parent": [
                63
            ],
            "snoozedBy": [
                51
            ],
            "labels": [
                64
            ],
            "subscribers": [
                67
            ],
            "team": [
                69
            ],
            "projectMilestone": [
                70
            ],
            "comments": [
                71
            ],
            "cycle": [
                98
            ],
            "project": [
                81
            ],
            "state": [
                99
            ],
            "children": [
                52
            ],
            "attachments": [
                100
            ],
            "searchableContent": [
                82
            ],
            "hasRelatedRelations": [
                83
            ],
            "hasDuplicateRelations": [
                83
            ],
            "hasBlockedByRelations": [
                83
            ],
            "hasBlockingRelations": [
                83
            ],
            "hasSuggestedRelatedIssues": [
                83
            ],
            "hasSuggestedSimilarIssues": [
                83
            ],
            "hasSuggestedAssignees": [
                83
            ],
            "hasSuggestedProjects": [
                83
            ],
            "hasSuggestedLabels": [
                83
            ],
            "slaStatus": [
                103
            ],
            "reactions": [
                73
            ],
            "needs": [
                80
            ],
            "customerCount": [
                46
            ],
            "leadTime": [
                105
            ],
            "cycleTime": [
                105
            ],
            "ageTime": [
                105
            ],
            "triageTime": [
                105
            ],
            "null": [
                12
            ],
            "and": [
                63
            ],
            "or": [
                63
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "isGroup": [
                50
            ],
            "creator": [
                51
            ],
            "team": [
                65
            ],
            "parent": [
                66
            ],
            "null": [
                12
            ],
            "and": [
                64
            ],
            "or": [
                64
            ],
            "some": [
                66
            ],
            "every": [
                66
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "NullableTeamFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "key": [
                44
            ],
            "description": [
                53
            ],
            "issues": [
                52
            ],
            "parent": [
                65
            ],
            "null": [
                12
            ],
            "and": [
                65
            ],
            "or": [
                65
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "isGroup": [
                50
            ],
            "creator": [
                51
            ],
            "team": [
                65
            ],
            "parent": [
                66
            ],
            "and": [
                66
            ],
            "or": [
                66
            ],
            "__typename": [
                7
            ]
        },
        "UserCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "displayName": [
                44
            ],
            "email": [
                44
            ],
            "active": [
                50
            ],
            "assignedIssues": [
                52
            ],
            "admin": [
                50
            ],
            "invited": [
                50
            ],
            "app": [
                50
            ],
            "isMe": [
                50
            ],
            "and": [
                67
            ],
            "or": [
                67
            ],
            "some": [
                68
            ],
            "every": [
                68
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "UserFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "displayName": [
                44
            ],
            "email": [
                44
            ],
            "active": [
                50
            ],
            "assignedIssues": [
                52
            ],
            "admin": [
                50
            ],
            "invited": [
                50
            ],
            "app": [
                50
            ],
            "isMe": [
                50
            ],
            "and": [
                68
            ],
            "or": [
                68
            ],
            "__typename": [
                7
            ]
        },
        "TeamFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "key": [
                44
            ],
            "description": [
                53
            ],
            "issues": [
                52
            ],
            "parent": [
                65
            ],
            "and": [
                69
            ],
            "or": [
                69
            ],
            "__typename": [
                7
            ]
        },
        "NullableProjectMilestoneFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                53
            ],
            "targetDate": [
                55
            ],
            "null": [
                12
            ],
            "and": [
                70
            ],
            "or": [
                70
            ],
            "__typename": [
                7
            ]
        },
        "CommentCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "body": [
                44
            ],
            "user": [
                68
            ],
            "issue": [
                63
            ],
            "projectUpdate": [
                72
            ],
            "parent": [
                75
            ],
            "documentContent": [
                76
            ],
            "reactions": [
                73
            ],
            "needs": [
                80
            ],
            "and": [
                71
            ],
            "or": [
                71
            ],
            "some": [
                97
            ],
            "every": [
                97
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "NullableProjectUpdateFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "user": [
                68
            ],
            "project": [
                40
            ],
            "reactions": [
                73
            ],
            "null": [
                12
            ],
            "and": [
                72
            ],
            "or": [
                72
            ],
            "__typename": [
                7
            ]
        },
        "ReactionCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "emoji": [
                44
            ],
            "customEmojiId": [
                41
            ],
            "and": [
                73
            ],
            "or": [
                73
            ],
            "some": [
                74
            ],
            "every": [
                74
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "ReactionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "emoji": [
                44
            ],
            "customEmojiId": [
                41
            ],
            "and": [
                74
            ],
            "or": [
                74
            ],
            "__typename": [
                7
            ]
        },
        "NullableCommentFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "body": [
                44
            ],
            "user": [
                68
            ],
            "issue": [
                63
            ],
            "projectUpdate": [
                72
            ],
            "parent": [
                75
            ],
            "documentContent": [
                76
            ],
            "reactions": [
                73
            ],
            "needs": [
                80
            ],
            "null": [
                12
            ],
            "and": [
                75
            ],
            "or": [
                75
            ],
            "__typename": [
                7
            ]
        },
        "NullableDocumentContentFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "project": [
                40
            ],
            "document": [
                77
            ],
            "null": [
                12
            ],
            "and": [
                76
            ],
            "or": [
                76
            ],
            "__typename": [
                7
            ]
        },
        "DocumentFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "title": [
                44
            ],
            "slugId": [
                44
            ],
            "creator": [
                68
            ],
            "project": [
                40
            ],
            "initiative": [
                78
            ],
            "and": [
                77
            ],
            "or": [
                77
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "status": [
                44
            ],
            "creator": [
                68
            ],
            "owner": [
                68
            ],
            "health": [
                44
            ],
            "healthWithAge": [
                44
            ],
            "ancestors": [
                79
            ],
            "and": [
                78
            ],
            "or": [
                78
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "status": [
                44
            ],
            "creator": [
                68
            ],
            "owner": [
                68
            ],
            "health": [
                44
            ],
            "healthWithAge": [
                44
            ],
            "ancestors": [
                79
            ],
            "and": [
                79
            ],
            "or": [
                79
            ],
            "some": [
                78
            ],
            "every": [
                78
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "priority": [
                46
            ],
            "project": [
                81
            ],
            "issue": [
                63
            ],
            "comment": [
                75
            ],
            "customer": [
                91
            ],
            "and": [
                80
            ],
            "or": [
                80
            ],
            "some": [
                96
            ],
            "every": [
                96
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "NullableProjectFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "state": [
                44
            ],
            "status": [
                45
            ],
            "priority": [
                48
            ],
            "labels": [
                49
            ],
            "searchableContent": [
                82
            ],
            "completedAt": [
                55
            ],
            "canceledAt": [
                55
            ],
            "startDate": [
                55
            ],
            "targetDate": [
                55
            ],
            "health": [
                44
            ],
            "healthWithAge": [
                44
            ],
            "activityType": [
                44
            ],
            "hasRelatedRelations": [
                83
            ],
            "hasDependedOnByRelations": [
                83
            ],
            "hasDependsOnRelations": [
                83
            ],
            "hasBlockedByRelations": [
                83
            ],
            "hasBlockingRelations": [
                83
            ],
            "hasViolatedRelations": [
                83
            ],
            "projectUpdates": [
                84
            ],
            "creator": [
                68
            ],
            "lead": [
                51
            ],
            "members": [
                67
            ],
            "issues": [
                52
            ],
            "roadmaps": [
                86
            ],
            "initiatives": [
                79
            ],
            "projectMilestones": [
                88
            ],
            "completedProjectMilestones": [
                88
            ],
            "nextProjectMilestone": [
                89
            ],
            "accessibleTeams": [
                90
            ],
            "lastAppliedTemplate": [
                60
            ],
            "needs": [
                80
            ],
            "customerCount": [
                46
            ],
            "null": [
                12
            ],
            "and": [
                81
            ],
            "or": [
                81
            ],
            "__typename": [
                7
            ]
        },
        "ContentComparator": {
            "contains": [
                7
            ],
            "notContains": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "RelationExistsComparator": {
            "eq": [
                12
            ],
            "neq": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdatesCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "health": [
                44
            ],
            "and": [
                84
            ],
            "or": [
                84
            ],
            "some": [
                85
            ],
            "every": [
                85
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdatesFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "health": [
                44
            ],
            "and": [
                85
            ],
            "or": [
                85
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "creator": [
                68
            ],
            "and": [
                86
            ],
            "or": [
                86
            ],
            "some": [
                87
            ],
            "every": [
                87
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slugId": [
                44
            ],
            "creator": [
                68
            ],
            "and": [
                87
            ],
            "or": [
                87
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                53
            ],
            "targetDate": [
                55
            ],
            "and": [
                88
            ],
            "or": [
                88
            ],
            "some": [
                89
            ],
            "every": [
                89
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                53
            ],
            "targetDate": [
                55
            ],
            "and": [
                89
            ],
            "or": [
                89
            ],
            "__typename": [
                7
            ]
        },
        "TeamCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "and": [
                90
            ],
            "or": [
                90
            ],
            "some": [
                69
            ],
            "every": [
                69
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "NullableCustomerFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slackChannelId": [
                44
            ],
            "domains": [
                92
            ],
            "externalIds": [
                92
            ],
            "owner": [
                51
            ],
            "needs": [
                80
            ],
            "revenue": [
                46
            ],
            "size": [
                46
            ],
            "status": [
                94
            ],
            "tier": [
                95
            ],
            "null": [
                12
            ],
            "and": [
                91
            ],
            "or": [
                91
            ],
            "__typename": [
                7
            ]
        },
        "StringArrayComparator": {
            "length": [
                46
            ],
            "every": [
                93
            ],
            "some": [
                93
            ],
            "__typename": [
                7
            ]
        },
        "StringItemComparator": {
            "eq": [
                7
            ],
            "neq": [
                7
            ],
            "in": [
                7
            ],
            "nin": [
                7
            ],
            "eqIgnoreCase": [
                7
            ],
            "neqIgnoreCase": [
                7
            ],
            "startsWith": [
                7
            ],
            "startsWithIgnoreCase": [
                7
            ],
            "notStartsWith": [
                7
            ],
            "endsWith": [
                7
            ],
            "notEndsWith": [
                7
            ],
            "contains": [
                7
            ],
            "containsIgnoreCase": [
                7
            ],
            "notContains": [
                7
            ],
            "notContainsIgnoreCase": [
                7
            ],
            "containsIgnoreCaseAndAccent": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "description": [
                44
            ],
            "position": [
                46
            ],
            "type": [
                44
            ],
            "color": [
                44
            ],
            "and": [
                94
            ],
            "or": [
                94
            ],
            "__typename": [
                7
            ]
        },
        "CustomerTierFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "description": [
                44
            ],
            "position": [
                46
            ],
            "color": [
                44
            ],
            "and": [
                95
            ],
            "or": [
                95
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "priority": [
                46
            ],
            "project": [
                81
            ],
            "issue": [
                63
            ],
            "comment": [
                75
            ],
            "customer": [
                91
            ],
            "and": [
                96
            ],
            "or": [
                96
            ],
            "__typename": [
                7
            ]
        },
        "CommentFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "body": [
                44
            ],
            "user": [
                68
            ],
            "issue": [
                63
            ],
            "projectUpdate": [
                72
            ],
            "parent": [
                75
            ],
            "documentContent": [
                76
            ],
            "reactions": [
                73
            ],
            "needs": [
                80
            ],
            "and": [
                97
            ],
            "or": [
                97
            ],
            "__typename": [
                7
            ]
        },
        "NullableCycleFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "number": [
                46
            ],
            "name": [
                44
            ],
            "startsAt": [
                42
            ],
            "endsAt": [
                42
            ],
            "completedAt": [
                42
            ],
            "isActive": [
                50
            ],
            "isInCooldown": [
                50
            ],
            "isNext": [
                50
            ],
            "isPrevious": [
                50
            ],
            "isFuture": [
                50
            ],
            "isPast": [
                50
            ],
            "team": [
                69
            ],
            "issues": [
                52
            ],
            "null": [
                12
            ],
            "and": [
                98
            ],
            "or": [
                98
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "description": [
                44
            ],
            "position": [
                46
            ],
            "type": [
                44
            ],
            "team": [
                69
            ],
            "issues": [
                52
            ],
            "and": [
                99
            ],
            "or": [
                99
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentCollectionFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "title": [
                44
            ],
            "subtitle": [
                53
            ],
            "url": [
                44
            ],
            "creator": [
                51
            ],
            "sourceType": [
                101
            ],
            "and": [
                100
            ],
            "or": [
                100
            ],
            "some": [
                102
            ],
            "every": [
                102
            ],
            "length": [
                46
            ],
            "__typename": [
                7
            ]
        },
        "SourceTypeComparator": {
            "eq": [
                7
            ],
            "neq": [
                7
            ],
            "in": [
                7
            ],
            "nin": [
                7
            ],
            "eqIgnoreCase": [
                7
            ],
            "neqIgnoreCase": [
                7
            ],
            "startsWith": [
                7
            ],
            "startsWithIgnoreCase": [
                7
            ],
            "notStartsWith": [
                7
            ],
            "endsWith": [
                7
            ],
            "notEndsWith": [
                7
            ],
            "contains": [
                7
            ],
            "containsIgnoreCase": [
                7
            ],
            "notContains": [
                7
            ],
            "notContainsIgnoreCase": [
                7
            ],
            "containsIgnoreCaseAndAccent": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "title": [
                44
            ],
            "subtitle": [
                53
            ],
            "url": [
                44
            ],
            "creator": [
                51
            ],
            "sourceType": [
                101
            ],
            "and": [
                102
            ],
            "or": [
                102
            ],
            "__typename": [
                7
            ]
        },
        "SlaStatusComparator": {
            "eq": [
                104
            ],
            "neq": [
                104
            ],
            "in": [
                104
            ],
            "nin": [
                104
            ],
            "null": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlaStatus": {},
        "NullableDurationComparator": {
            "eq": [
                106
            ],
            "neq": [
                106
            ],
            "in": [
                106
            ],
            "nin": [
                106
            ],
            "null": [
                12
            ],
            "lt": [
                106
            ],
            "lte": [
                106
            ],
            "gt": [
                106
            ],
            "gte": [
                106
            ],
            "__typename": [
                7
            ]
        },
        "Duration": {},
        "IssueFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "number": [
                46
            ],
            "title": [
                44
            ],
            "description": [
                53
            ],
            "priority": [
                48
            ],
            "estimate": [
                54
            ],
            "startedAt": [
                55
            ],
            "triagedAt": [
                55
            ],
            "completedAt": [
                55
            ],
            "canceledAt": [
                55
            ],
            "archivedAt": [
                55
            ],
            "autoClosedAt": [
                55
            ],
            "autoArchivedAt": [
                55
            ],
            "addedToCycleAt": [
                55
            ],
            "addedToCyclePeriod": [
                56
            ],
            "dueDate": [
                58
            ],
            "snoozedUntilAt": [
                55
            ],
            "assignee": [
                51
            ],
            "lastAppliedTemplate": [
                60
            ],
            "recurringIssueTemplate": [
                60
            ],
            "sourceMetadata": [
                61
            ],
            "creator": [
                51
            ],
            "parent": [
                63
            ],
            "snoozedBy": [
                51
            ],
            "labels": [
                64
            ],
            "subscribers": [
                67
            ],
            "team": [
                69
            ],
            "projectMilestone": [
                70
            ],
            "comments": [
                71
            ],
            "cycle": [
                98
            ],
            "project": [
                81
            ],
            "state": [
                99
            ],
            "children": [
                52
            ],
            "attachments": [
                100
            ],
            "searchableContent": [
                82
            ],
            "hasRelatedRelations": [
                83
            ],
            "hasDuplicateRelations": [
                83
            ],
            "hasBlockedByRelations": [
                83
            ],
            "hasBlockingRelations": [
                83
            ],
            "hasSuggestedRelatedIssues": [
                83
            ],
            "hasSuggestedSimilarIssues": [
                83
            ],
            "hasSuggestedAssignees": [
                83
            ],
            "hasSuggestedProjects": [
                83
            ],
            "hasSuggestedLabels": [
                83
            ],
            "slaStatus": [
                103
            ],
            "reactions": [
                73
            ],
            "needs": [
                80
            ],
            "customerCount": [
                46
            ],
            "leadTime": [
                105
            ],
            "cycleTime": [
                105
            ],
            "ageTime": [
                105
            ],
            "triageTime": [
                105
            ],
            "and": [
                107
            ],
            "or": [
                107
            ],
            "__typename": [
                7
            ]
        },
        "ProjectLabelFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "isGroup": [
                50
            ],
            "creator": [
                51
            ],
            "parent": [
                108
            ],
            "and": [
                108
            ],
            "or": [
                108
            ],
            "__typename": [
                7
            ]
        },
        "PaginationOrderBy": {},
        "ProjectSortInput": {
            "name": [
                111
            ],
            "status": [
                114
            ],
            "priority": [
                115
            ],
            "manual": [
                116
            ],
            "targetDate": [
                117
            ],
            "startDate": [
                118
            ],
            "__typename": [
                7
            ]
        },
        "ProjectNameSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "PaginationNulls": {},
        "PaginationSortOrder": {},
        "ProjectStatusSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "ProjectPrioritySort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "noPriorityFirst": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectManualSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "TargetDateSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "StartDateSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "EntityExternalLinkConnection": {
            "edges": [
                120
            ],
            "nodes": [
                121
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "EntityExternalLinkEdge": {
            "node": [
                121
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EntityExternalLink": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "url": [
                7
            ],
            "label": [
                7
            ],
            "sortOrder": [
                9
            ],
            "creator": [
                6
            ],
            "initiative": [
                34
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationsSettings": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "contextViewType": [
                123
            ],
            "slackIssueCreated": [
                12
            ],
            "slackIssueNewComment": [
                12
            ],
            "slackIssueStatusChangedDone": [
                12
            ],
            "slackIssueAddedToView": [
                12
            ],
            "slackIssueStatusChangedAll": [
                12
            ],
            "slackProjectUpdateCreated": [
                12
            ],
            "slackProjectUpdateCreatedToTeam": [
                12
            ],
            "slackProjectUpdateCreatedToWorkspace": [
                12
            ],
            "slackInitiativeUpdateCreated": [
                12
            ],
            "slackIssueAddedToTriage": [
                12
            ],
            "slackIssueSlaHighRisk": [
                12
            ],
            "slackIssueSlaBreached": [
                12
            ],
            "team": [
                11
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "__typename": [
                7
            ]
        },
        "ContextViewType": {},
        "InitiativeHistoryConnection": {
            "edges": [
                125
            ],
            "nodes": [
                126
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeHistoryEdge": {
            "node": [
                126
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeHistory": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "entries": [
                18
            ],
            "initiative": [
                34
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeConnection": {
            "edges": [
                128
            ],
            "nodes": [
                34
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeEdge": {
            "node": [
                34
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CommentConnection": {
            "edges": [
                130
            ],
            "nodes": [
                32
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CommentEdge": {
            "node": [
                32
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Post": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "body": [
                7
            ],
            "bodyData": [
                7
            ],
            "writtenSummaryData": [
                18
            ],
            "audioSummary": [
                7
            ],
            "title": [
                7
            ],
            "slugId": [
                7
            ],
            "creator": [
                6
            ],
            "editedAt": [
                5
            ],
            "reactionData": [
                18
            ],
            "ttlUrl": [
                7
            ],
            "user": [
                6
            ],
            "team": [
                11
            ],
            "type": [
                132
            ],
            "evalLogId": [
                7
            ],
            "feedSummaryScheduleAtCreate": [
                133
            ],
            "__typename": [
                7
            ]
        },
        "PostType": {},
        "FeedSummarySchedule": {},
        "ExternalUser": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "displayName": [
                7
            ],
            "email": [
                7
            ],
            "avatarUrl": [
                7
            ],
            "organization": [
                8
            ],
            "lastSeen": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "ActorBot": {
            "id": [
                4
            ],
            "type": [
                7
            ],
            "subType": [
                7
            ],
            "name": [
                7
            ],
            "userDisplayName": [
                7
            ],
            "avatarUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "SyncedExternalThread": {
            "id": [
                4
            ],
            "type": [
                7
            ],
            "subType": [
                7
            ],
            "name": [
                7
            ],
            "displayName": [
                7
            ],
            "url": [
                7
            ],
            "isConnected": [
                12
            ],
            "isPersonalIntegrationConnected": [
                12
            ],
            "isPersonalIntegrationRequired": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ExternalEntityInfo": {
            "id": [
                7
            ],
            "service": [
                138
            ],
            "metadata": [
                139
            ],
            "__typename": [
                7
            ]
        },
        "ExternalSyncService": {},
        "ExternalEntityInfoMetadata": {
            "on_ExternalEntityInfoGithubMetadata": [
                140
            ],
            "on_ExternalEntityInfoJiraMetadata": [
                141
            ],
            "on_ExternalEntitySlackMetadata": [
                142
            ],
            "__typename": [
                7
            ]
        },
        "ExternalEntityInfoGithubMetadata": {
            "repo": [
                7
            ],
            "owner": [
                7
            ],
            "number": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ExternalEntityInfoJiraMetadata": {
            "issueKey": [
                7
            ],
            "projectId": [
                7
            ],
            "issueTypeId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ExternalEntitySlackMetadata": {
            "isFromSlack": [
                12
            ],
            "channelId": [
                7
            ],
            "channelName": [
                7
            ],
            "messageUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Favorite": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "parent": [
                143
            ],
            "folderName": [
                7
            ],
            "projectTab": [
                144
            ],
            "predefinedViewType": [
                7
            ],
            "initiativeTab": [
                145
            ],
            "owner": [
                6
            ],
            "sortOrder": [
                9
            ],
            "children": [
                146,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issue": [
                16
            ],
            "project": [
                20
            ],
            "facet": [
                10
            ],
            "projectTeam": [
                11
            ],
            "cycle": [
                148
            ],
            "customView": [
                149
            ],
            "predefinedViewTeam": [
                11
            ],
            "document": [
                176
            ],
            "roadmap": [
                177
            ],
            "initiative": [
                34
            ],
            "label": [
                178
            ],
            "projectLabel": [
                181
            ],
            "user": [
                6
            ],
            "customer": [
                182
            ],
            "dashboard": [
                187
            ],
            "url": [
                7
            ],
            "title": [
                7
            ],
            "detail": [
                7
            ],
            "color": [
                7
            ],
            "icon": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectTab": {},
        "InitiativeTab": {},
        "FavoriteConnection": {
            "edges": [
                147
            ],
            "nodes": [
                143
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "FavoriteEdge": {
            "node": [
                143
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Cycle": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "number": [
                9
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "startsAt": [
                5
            ],
            "endsAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "autoArchivedAt": [
                5
            ],
            "issueCountHistory": [
                9
            ],
            "completedIssueCountHistory": [
                9
            ],
            "scopeHistory": [
                9
            ],
            "completedScopeHistory": [
                9
            ],
            "inProgressScopeHistory": [
                9
            ],
            "team": [
                11
            ],
            "progressHistory": [
                18
            ],
            "currentProgress": [
                18
            ],
            "inheritedFrom": [
                148
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "uncompletedIssuesUponClose": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "progress": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "CustomView": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "organization": [
                8
            ],
            "creator": [
                6
            ],
            "owner": [
                6
            ],
            "updatedBy": [
                6
            ],
            "filters": [
                18
            ],
            "filterData": [
                18
            ],
            "projectFilterData": [
                18
            ],
            "feedItemFilterData": [
                18
            ],
            "shared": [
                12
            ],
            "slugId": [
                7
            ],
            "modelName": [
                7
            ],
            "facet": [
                10
            ],
            "team": [
                11
            ],
            "projects": [
                37,
                {
                    "filter": [
                        40
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sort": [
                        110,
                        "[ProjectSortInput!]"
                    ]
                }
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sort": [
                        150,
                        "[IssueSortInput!]"
                    ]
                }
            ],
            "userViewPreferences": [
                174
            ],
            "organizationViewPreferences": [
                174
            ],
            "viewPreferencesValues": [
                175
            ],
            "__typename": [
                7
            ]
        },
        "IssueSortInput": {
            "priority": [
                151
            ],
            "estimate": [
                152
            ],
            "title": [
                153
            ],
            "label": [
                154
            ],
            "labelGroup": [
                155
            ],
            "slaStatus": [
                156
            ],
            "createdAt": [
                157
            ],
            "updatedAt": [
                158
            ],
            "completedAt": [
                159
            ],
            "dueDate": [
                160
            ],
            "cycle": [
                161
            ],
            "milestone": [
                162
            ],
            "assignee": [
                163
            ],
            "project": [
                164
            ],
            "team": [
                165
            ],
            "manual": [
                166
            ],
            "workflowState": [
                167
            ],
            "customer": [
                168
            ],
            "customerRevenue": [
                169
            ],
            "customerCount": [
                170
            ],
            "customerImportantCount": [
                171
            ],
            "rootIssue": [
                172
            ],
            "linkCount": [
                173
            ],
            "__typename": [
                7
            ]
        },
        "PrioritySort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "noPriorityFirst": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EstimateSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "TitleSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "LabelSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "LabelGroupSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "labelGroupId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "SlaStatusSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CreatedAtSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "UpdatedAtSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CompletedAtSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "DueDateSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CycleSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "currentCycleFirst": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "MilestoneSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "AssigneeSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "ProjectSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "TeamSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "ManualSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "closedIssuesOrderedByRecency": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CustomerSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CustomerRevenueSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CustomerCountSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CustomerImportantCountSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "RootIssueSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "sort": [
                150
            ],
            "__typename": [
                7
            ]
        },
        "LinkCountSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "ViewPreferences": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "viewType": [
                7
            ],
            "preferences": [
                175
            ],
            "__typename": [
                7
            ]
        },
        "ViewPreferencesValues": {
            "viewOrdering": [
                7
            ],
            "issueGrouping": [
                7
            ],
            "showCompletedIssues": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Document": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "creator": [
                6
            ],
            "updatedBy": [
                6
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "slugId": [
                7
            ],
            "lastAppliedTemplate": [
                26
            ],
            "hiddenAt": [
                5
            ],
            "trashed": [
                12
            ],
            "sortOrder": [
                9
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "content": [
                7
            ],
            "contentState": [
                7
            ],
            "documentContentId": [
                7
            ],
            "url": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Roadmap": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "organization": [
                8
            ],
            "creator": [
                6
            ],
            "owner": [
                6
            ],
            "slugId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "color": [
                7
            ],
            "projects": [
                37,
                {
                    "filter": [
                        40
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "url": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabel": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "color": [
                7
            ],
            "isGroup": [
                12
            ],
            "organization": [
                8
            ],
            "team": [
                11
            ],
            "creator": [
                6
            ],
            "parent": [
                178
            ],
            "inheritedFrom": [
                178
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "children": [
                179,
                {
                    "filter": [
                        66
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelConnection": {
            "edges": [
                180
            ],
            "nodes": [
                178
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelEdge": {
            "node": [
                178
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectLabel": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "color": [
                7
            ],
            "isGroup": [
                12
            ],
            "organization": [
                8
            ],
            "creator": [
                6
            ],
            "parent": [
                181
            ],
            "__typename": [
                7
            ]
        },
        "Customer": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "logoUrl": [
                7
            ],
            "domains": [
                7
            ],
            "externalIds": [
                7
            ],
            "slackChannelId": [
                7
            ],
            "owner": [
                6
            ],
            "status": [
                183
            ],
            "revenue": [
                9
            ],
            "size": [
                9
            ],
            "tier": [
                185
            ],
            "approximateNeedCount": [
                9
            ],
            "slugId": [
                7
            ],
            "mainSourceId": [
                7
            ],
            "integration": [
                186
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatus": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "displayName": [
                7
            ],
            "type": [
                184
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusType": {},
        "CustomerTier": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Integration": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "service": [
                7
            ],
            "organization": [
                8
            ],
            "team": [
                11
            ],
            "creator": [
                6
            ],
            "__typename": [
                7
            ]
        },
        "Dashboard": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "slugId": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "sortOrder": [
                9
            ],
            "shared": [
                12
            ],
            "organization": [
                8
            ],
            "creator": [
                6
            ],
            "updatedBy": [
                6
            ],
            "owner": [
                6
            ],
            "issueFilter": [
                18
            ],
            "projectFilter": [
                18
            ],
            "widgets": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "TeamConnection": {
            "edges": [
                189
            ],
            "nodes": [
                11
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "TeamEdge": {
            "node": [
                11
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "UserConnection": {
            "edges": [
                191
            ],
            "nodes": [
                6
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "UserEdge": {
            "node": [
                6
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateConnection": {
            "edges": [
                193
            ],
            "nodes": [
                29
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateEdge": {
            "node": [
                29
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "DocumentConnection": {
            "edges": [
                195
            ],
            "nodes": [
                176
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "DocumentEdge": {
            "node": [
                176
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneConnection": {
            "edges": [
                197
            ],
            "nodes": [
                198
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneEdge": {
            "node": [
                198
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestone": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "documentContent": [
                19
            ],
            "targetDate": [
                17
            ],
            "project": [
                20
            ],
            "progressHistory": [
                18
            ],
            "currentProgress": [
                18
            ],
            "sortOrder": [
                9
            ],
            "description": [
                7
            ],
            "status": [
                199
            ],
            "progress": [
                9
            ],
            "descriptionState": [
                7
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneStatus": {},
        "ProjectHistoryConnection": {
            "edges": [
                201
            ],
            "nodes": [
                202
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectHistoryEdge": {
            "node": [
                202
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectHistory": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "entries": [
                18
            ],
            "project": [
                20
            ],
            "__typename": [
                7
            ]
        },
        "ProjectLabelConnection": {
            "edges": [
                204
            ],
            "nodes": [
                181
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectLabelEdge": {
            "node": [
                181
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectRelationConnection": {
            "edges": [
                206
            ],
            "nodes": [
                207
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectRelationEdge": {
            "node": [
                207
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectRelation": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "project": [
                20
            ],
            "projectMilestone": [
                198
            ],
            "anchorType": [
                7
            ],
            "relatedProject": [
                20
            ],
            "relatedProjectMilestone": [
                198
            ],
            "relatedAnchorType": [
                7
            ],
            "user": [
                6
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedConnection": {
            "edges": [
                209
            ],
            "nodes": [
                210
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedEdge": {
            "node": [
                210
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeed": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "customer": [
                182
            ],
            "issue": [
                16
            ],
            "project": [
                20
            ],
            "comment": [
                32
            ],
            "attachment": [
                211
            ],
            "projectAttachment": [
                212
            ],
            "priority": [
                9
            ],
            "body": [
                7
            ],
            "bodyData": [
                7
            ],
            "creator": [
                6
            ],
            "originalIssue": [
                16
            ],
            "url": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Attachment": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "url": [
                7
            ],
            "creator": [
                6
            ],
            "externalUserCreator": [
                134
            ],
            "metadata": [
                18
            ],
            "source": [
                18
            ],
            "sourceType": [
                7
            ],
            "groupBySource": [
                12
            ],
            "originalIssue": [
                16
            ],
            "issue": [
                16
            ],
            "bodyData": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectAttachment": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "url": [
                7
            ],
            "creator": [
                6
            ],
            "metadata": [
                18
            ],
            "source": [
                18
            ],
            "sourceType": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Meeting": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "location": [
                7
            ],
            "meetingLink": [
                7
            ],
            "recordingLink": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "creator": [
                6
            ],
            "updatedBy": [
                6
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "startsAt": [
                5
            ],
            "endsAt": [
                5
            ],
            "hiddenAt": [
                5
            ],
            "trashed": [
                12
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationService": {},
        "IssueHistoryConnection": {
            "edges": [
                216
            ],
            "nodes": [
                217
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IssueHistoryEdge": {
            "node": [
                217
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueHistory": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "issue": [
                16
            ],
            "actorId": [
                7
            ],
            "updatedDescription": [
                12
            ],
            "fromTitle": [
                7
            ],
            "toTitle": [
                7
            ],
            "fromAssigneeId": [
                7
            ],
            "toAssigneeId": [
                7
            ],
            "fromPriority": [
                9
            ],
            "toPriority": [
                9
            ],
            "fromTeamId": [
                7
            ],
            "toTeamId": [
                7
            ],
            "fromParentId": [
                7
            ],
            "toParentId": [
                7
            ],
            "fromStateId": [
                7
            ],
            "toStateId": [
                7
            ],
            "fromCycleId": [
                7
            ],
            "toCycleId": [
                7
            ],
            "toConvertedProjectId": [
                7
            ],
            "fromProjectId": [
                7
            ],
            "toProjectId": [
                7
            ],
            "fromEstimate": [
                9
            ],
            "toEstimate": [
                9
            ],
            "archived": [
                12
            ],
            "trashed": [
                12
            ],
            "attachmentId": [
                7
            ],
            "addedLabelIds": [
                7
            ],
            "removedLabelIds": [
                7
            ],
            "relationChanges": [
                218
            ],
            "autoClosed": [
                12
            ],
            "autoArchived": [
                12
            ],
            "fromDueDate": [
                17
            ],
            "toDueDate": [
                17
            ],
            "customerNeedId": [
                7
            ],
            "changes": [
                18
            ],
            "actor": [
                6
            ],
            "actors": [
                6
            ],
            "descriptionUpdatedBy": [
                6
            ],
            "fromAssignee": [
                6
            ],
            "toAssignee": [
                6
            ],
            "fromCycle": [
                148
            ],
            "toCycle": [
                148
            ],
            "toConvertedProject": [
                20
            ],
            "fromProject": [
                20
            ],
            "toProject": [
                20
            ],
            "fromState": [
                13
            ],
            "toState": [
                13
            ],
            "fromTeam": [
                11
            ],
            "toTeam": [
                11
            ],
            "fromParent": [
                16
            ],
            "toParent": [
                16
            ],
            "attachment": [
                211
            ],
            "issueImport": [
                219
            ],
            "triageResponsibilityNotifiedUsers": [
                6
            ],
            "botActor": [
                135
            ],
            "addedLabels": [
                178
            ],
            "removedLabels": [
                178
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelationHistoryPayload": {
            "identifier": [
                7
            ],
            "type": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueImport": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "teamName": [
                7
            ],
            "creatorId": [
                7
            ],
            "service": [
                7
            ],
            "status": [
                7
            ],
            "mapping": [
                18
            ],
            "error": [
                7
            ],
            "progress": [
                9
            ],
            "csvFileUrl": [
                7
            ],
            "errorMetadata": [
                18
            ],
            "serviceMetadata": [
                18
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelationConnection": {
            "edges": [
                221
            ],
            "nodes": [
                222
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelationEdge": {
            "node": [
                222
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelation": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "issue": [
                16
            ],
            "relatedIssue": [
                16
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentConnection": {
            "edges": [
                224
            ],
            "nodes": [
                211
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentEdge": {
            "node": [
                211
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueSuggestionConnection": {
            "edges": [
                226
            ],
            "nodes": [
                227
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IssueSuggestionEdge": {
            "node": [
                227
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueSuggestion": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "issue": [
                16
            ],
            "issueId": [
                7
            ],
            "type": [
                228
            ],
            "state": [
                229
            ],
            "stateChangedAt": [
                5
            ],
            "metadata": [
                230
            ],
            "suggestedIssue": [
                16
            ],
            "suggestedIssueId": [
                7
            ],
            "suggestedTeam": [
                11
            ],
            "suggestedProject": [
                20
            ],
            "suggestedUser": [
                6
            ],
            "suggestedUserId": [
                7
            ],
            "suggestedLabel": [
                178
            ],
            "suggestedLabelId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueSuggestionType": {},
        "IssueSuggestionState": {},
        "IssueSuggestionMetadata": {
            "score": [
                9
            ],
            "classification": [
                7
            ],
            "reasons": [
                7
            ],
            "evalLogId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CycleConnection": {
            "edges": [
                232
            ],
            "nodes": [
                148
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CycleEdge": {
            "node": [
                148
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CycleFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "number": [
                46
            ],
            "name": [
                44
            ],
            "startsAt": [
                42
            ],
            "endsAt": [
                42
            ],
            "completedAt": [
                42
            ],
            "isActive": [
                50
            ],
            "isInCooldown": [
                50
            ],
            "isNext": [
                50
            ],
            "isPrevious": [
                50
            ],
            "isFuture": [
                50
            ],
            "isPast": [
                50
            ],
            "team": [
                69
            ],
            "issues": [
                52
            ],
            "and": [
                233
            ],
            "or": [
                233
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibility": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "action": [
                235
            ],
            "manualSelection": [
                236
            ],
            "team": [
                11
            ],
            "timeSchedule": [
                237
            ],
            "currentUser": [
                6
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityAction": {},
        "TriageResponsibilityManualSelection": {
            "userIds": [
                7
            ],
            "assignmentIndex": [
                28
            ],
            "__typename": [
                7
            ]
        },
        "TimeSchedule": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "entries": [
                238
            ],
            "externalId": [
                7
            ],
            "externalUrl": [
                7
            ],
            "organization": [
                8
            ],
            "integration": [
                186
            ],
            "__typename": [
                7
            ]
        },
        "TimeScheduleEntry": {
            "startsAt": [
                5
            ],
            "endsAt": [
                5
            ],
            "userId": [
                7
            ],
            "userEmail": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TeamMembership": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "user": [
                6
            ],
            "team": [
                11
            ],
            "owner": [
                12
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "TeamMembershipConnection": {
            "edges": [
                241
            ],
            "nodes": [
                239
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "TeamMembershipEdge": {
            "node": [
                239
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateConnection": {
            "edges": [
                243
            ],
            "nodes": [
                13
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateEdge": {
            "node": [
                13
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationStateConnection": {
            "edges": [
                245
            ],
            "nodes": [
                246
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationStateEdge": {
            "node": [
                246
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationState": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "state": [
                13
            ],
            "team": [
                11
            ],
            "targetBranch": [
                247
            ],
            "event": [
                248
            ],
            "branchPattern": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationTargetBranch": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "team": [
                11
            ],
            "branchPattern": [
                7
            ],
            "isRegex": [
                12
            ],
            "automationStates": [
                244,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationStates": {},
        "TemplateConnection": {
            "edges": [
                250
            ],
            "nodes": [
                26
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "TemplateEdge": {
            "node": [
                26
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "WebhookConnection": {
            "edges": [
                252
            ],
            "nodes": [
                253
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "WebhookEdge": {
            "node": [
                253
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Webhook": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "label": [
                7
            ],
            "url": [
                7
            ],
            "enabled": [
                12
            ],
            "team": [
                11
            ],
            "teamIds": [
                7
            ],
            "allPublicTeams": [
                12
            ],
            "creator": [
                6
            ],
            "secret": [
                7
            ],
            "resourceTypes": [
                7
            ],
            "failures": [
                254
            ],
            "__typename": [
                7
            ]
        },
        "WebhookFailureEvent": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "webhook": [
                253
            ],
            "url": [
                7
            ],
            "httpStatus": [
                9
            ],
            "responseOrError": [
                7
            ],
            "executionId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "FacetPageSource": {},
        "OrganizationIpRestriction": {
            "range": [
                7
            ],
            "type": [
                7
            ],
            "description": [
                7
            ],
            "enabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ReleaseChannel": {},
        "SLADayCountType": {},
        "ProjectUpdateReminderFrequency": {},
        "IntegrationConnection": {
            "edges": [
                261
            ],
            "nodes": [
                186
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationEdge": {
            "node": [
                186
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "PaidSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "seats": [
                9
            ],
            "seatsMinimum": [
                9
            ],
            "seatsMaximum": [
                9
            ],
            "creator": [
                6
            ],
            "organization": [
                8
            ],
            "collectionMethod": [
                7
            ],
            "canceledAt": [
                5
            ],
            "cancelAt": [
                5
            ],
            "pendingChangeType": [
                7
            ],
            "nextBillingAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "IssueDraftConnection": {
            "edges": [
                264
            ],
            "nodes": [
                265
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IssueDraftEdge": {
            "node": [
                265
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueDraft": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "description": [
                7
            ],
            "priority": [
                9
            ],
            "estimate": [
                9
            ],
            "dueDate": [
                17
            ],
            "labelIds": [
                7
            ],
            "teamId": [
                7
            ],
            "cycleId": [
                7
            ],
            "projectId": [
                7
            ],
            "projectMilestoneId": [
                7
            ],
            "creator": [
                6
            ],
            "assigneeId": [
                7
            ],
            "stateId": [
                7
            ],
            "parent": [
                265
            ],
            "parentId": [
                7
            ],
            "sourceCommentId": [
                7
            ],
            "parentIssue": [
                16
            ],
            "parentIssueId": [
                7
            ],
            "subIssueSortOrder": [
                9
            ],
            "priorityLabel": [
                7
            ],
            "descriptionData": [
                27
            ],
            "attachments": [
                18
            ],
            "needs": [
                18
            ],
            "schedule": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "DraftConnection": {
            "edges": [
                267
            ],
            "nodes": [
                268
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "DraftEdge": {
            "node": [
                268
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Draft": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "bodyData": [
                27
            ],
            "data": [
                18
            ],
            "isAutogenerated": [
                12
            ],
            "wasLocalDraft": [
                12
            ],
            "user": [
                6
            ],
            "issue": [
                16
            ],
            "project": [
                20
            ],
            "projectUpdate": [
                29
            ],
            "initiative": [
                34
            ],
            "initiativeUpdate": [
                33
            ],
            "post": [
                131
            ],
            "parentComment": [
                32
            ],
            "customerNeed": [
                210
            ],
            "__typename": [
                7
            ]
        },
        "UserContextViewType": {},
        "CustomViewNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CycleNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "LabelNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TeamNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "UserNotificationSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "subscriber": [
                6
            ],
            "customer": [
                182
            ],
            "customView": [
                149
            ],
            "cycle": [
                148
            ],
            "label": [
                178
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "user": [
                6
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "active": [
                12
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueNotification": {
            "commentId": [
                7
            ],
            "parentCommentId": [
                7
            ],
            "reactionEmoji": [
                7
            ],
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "issueId": [
                7
            ],
            "issue": [
                16
            ],
            "comment": [
                32
            ],
            "parentComment": [
                32
            ],
            "team": [
                11
            ],
            "subscriptions": [
                1
            ],
            "__typename": [
                7
            ]
        },
        "Notification": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "on_IssueNotification": [
                277
            ],
            "on_ProjectNotification": [
                279
            ],
            "on_InitiativeNotification": [
                280
            ],
            "on_OauthClientApprovalNotification": [
                281
            ],
            "on_DocumentNotification": [
                284
            ],
            "on_PostNotification": [
                285
            ],
            "on_CustomerNeedNotification": [
                286
            ],
            "on_PullRequestNotification": [
                287
            ],
            "__typename": [
                7
            ]
        },
        "ProjectNotification": {
            "commentId": [
                7
            ],
            "parentCommentId": [
                7
            ],
            "reactionEmoji": [
                7
            ],
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "projectId": [
                7
            ],
            "projectMilestoneId": [
                7
            ],
            "projectUpdateId": [
                7
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "document": [
                176
            ],
            "projectUpdate": [
                29
            ],
            "initiativeUpdate": [
                33
            ],
            "comment": [
                32
            ],
            "parentComment": [
                32
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeNotification": {
            "commentId": [
                7
            ],
            "parentCommentId": [
                7
            ],
            "reactionEmoji": [
                7
            ],
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "initiativeId": [
                7
            ],
            "initiativeUpdateId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OauthClientApprovalNotification": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "oauthClientApprovalId": [
                7
            ],
            "oauthClientApproval": [
                282
            ],
            "__typename": [
                7
            ]
        },
        "OauthClientApproval": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "oauthClientId": [
                7
            ],
            "requesterId": [
                7
            ],
            "responderId": [
                7
            ],
            "status": [
                283
            ],
            "scopes": [
                7
            ],
            "requestReason": [
                7
            ],
            "denyReason": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OAuthClientApprovalStatus": {},
        "DocumentNotification": {
            "commentId": [
                7
            ],
            "parentCommentId": [
                7
            ],
            "reactionEmoji": [
                7
            ],
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "documentId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "PostNotification": {
            "commentId": [
                7
            ],
            "parentCommentId": [
                7
            ],
            "reactionEmoji": [
                7
            ],
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "postId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedNotification": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "customerNeedId": [
                7
            ],
            "relatedIssue": [
                16
            ],
            "relatedProject": [
                20
            ],
            "__typename": [
                7
            ]
        },
        "PullRequestNotification": {
            "commentId": [
                7
            ],
            "parentCommentId": [
                7
            ],
            "reactionEmoji": [
                7
            ],
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "actor": [
                6
            ],
            "externalUserActor": [
                134
            ],
            "user": [
                6
            ],
            "readAt": [
                5
            ],
            "emailedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "unsnoozedAt": [
                5
            ],
            "url": [
                7
            ],
            "inboxUrl": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "isLinearActor": [
                12
            ],
            "actorAvatarUrl": [
                7
            ],
            "actorInitials": [
                7
            ],
            "actorAvatarColor": [
                7
            ],
            "issueStatusType": [
                7
            ],
            "projectUpdateHealth": [
                7
            ],
            "groupingKey": [
                7
            ],
            "groupingPriority": [
                9
            ],
            "botActor": [
                135
            ],
            "pullRequestId": [
                7
            ],
            "pullRequest": [
                288
            ],
            "__typename": [
                7
            ]
        },
        "PullRequest": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "number": [
                9
            ],
            "sourceBranch": [
                7
            ],
            "targetBranch": [
                7
            ],
            "url": [
                7
            ],
            "status": [
                289
            ],
            "__typename": [
                7
            ]
        },
        "PullRequestStatus": {},
        "Query": {
            "workflowStates": [
                242,
                {
                    "filter": [
                        99
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "workflowState": [
                13,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                251,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "webhook": [
                253,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "failuresForOauthWebhooks": [
                254,
                {
                    "oauthClientId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userSettings": [
                291
            ],
            "users": [
                190,
                {
                    "filter": [
                        68
                    ],
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "user": [
                6,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                6
            ],
            "triageResponsibilities": [
                298,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "triageResponsibility": [
                234,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "timeSchedules": [
                300,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "timeSchedule": [
                237,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "templates": [
                26
            ],
            "template": [
                26,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "templatesForIntegration": [
                26,
                {
                    "integrationType": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projects": [
                37,
                {
                    "filter": [
                        40
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sort": [
                        110,
                        "[ProjectSortInput!]"
                    ]
                }
            ],
            "project": [
                20,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectFilterSuggestion": [
                302,
                {
                    "prompt": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teams": [
                188,
                {
                    "filter": [
                        69
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "administrableTeams": [
                188,
                {
                    "filter": [
                        69
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "team": [
                11,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamMemberships": [
                240,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "teamMembership": [
                239,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "semanticSearch": [
                303,
                {
                    "query": [
                        7,
                        "String!"
                    ],
                    "types": [
                        305,
                        "[SemanticSearchResultType!]"
                    ],
                    "maxResults": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ]
                }
            ],
            "searchDocuments": [
                306,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "term": [
                        7,
                        "String!"
                    ],
                    "includeComments": [
                        12
                    ],
                    "teamId": [
                        7
                    ]
                }
            ],
            "searchProjects": [
                310,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "term": [
                        7,
                        "String!"
                    ],
                    "includeComments": [
                        12
                    ],
                    "teamId": [
                        7
                    ]
                }
            ],
            "searchIssues": [
                313,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "term": [
                        7,
                        "String!"
                    ],
                    "includeComments": [
                        12
                    ],
                    "teamId": [
                        7
                    ]
                }
            ],
            "roadmapToProjects": [
                316,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "roadmapToProject": [
                318,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmaps": [
                319,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "roadmap": [
                177,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "rateLimitStatus": [
                321
            ],
            "pushSubscriptionTest": [
                323,
                {
                    "targetMobile": [
                        12
                    ],
                    "sendStrategy": [
                        324
                    ]
                }
            ],
            "projectUpdates": [
                192,
                {
                    "filter": [
                        325
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectUpdate": [
                29,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "summarizeProjectUpdates": [
                326,
                {
                    "ids": [
                        7,
                        "[String!]!"
                    ]
                }
            ],
            "projectStatuses": [
                327,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectStatusProjectCount": [
                329,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectStatus": [
                23,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectRelations": [
                205,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectRelation": [
                207,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectMilestones": [
                196,
                {
                    "filter": [
                        89
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectMilestone": [
                198,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organization": [
                8
            ],
            "organizationExists": [
                330,
                {
                    "urlKey": [
                        7,
                        "String!"
                    ]
                }
            ],
            "archivedTeams": [
                11
            ],
            "organizationMeta": [
                331,
                {
                    "urlKey": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationInvites": [
                332,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "organizationInvite": [
                334,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationInviteDetails": [
                336,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationDomainClaimRequest": [
                340,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notificationSubscriptions": [
                341,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "notificationSubscription": [
                1,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notifications": [
                343,
                {
                    "filter": [
                        345
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "notificationsUnreadCount": [
                28
            ],
            "notification": [
                278,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sort": [
                        150,
                        "[IssueSortInput!]"
                    ]
                }
            ],
            "issue": [
                16,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueSearch": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "query": [
                        7
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issueVcsBranchSearch": [
                16,
                {
                    "branchName": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueFigmaFileKeySearch": [
                14,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "fileKey": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issuePriorityValues": [
                346
            ],
            "issueFilterSuggestion": [
                347,
                {
                    "projectId": [
                        7
                    ],
                    "prompt": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueRelations": [
                220,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issueRelation": [
                222,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueLabels": [
                179,
                {
                    "filter": [
                        66
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issueLabel": [
                178,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueImportCheckCSV": [
                348,
                {
                    "csvUrl": [
                        7,
                        "String!"
                    ],
                    "service": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueImportCheckSync": [
                349,
                {
                    "issueImportId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueImportJqlCheck": [
                350,
                {
                    "jiraHostname": [
                        7,
                        "String!"
                    ],
                    "jiraToken": [
                        7,
                        "String!"
                    ],
                    "jiraEmail": [
                        7,
                        "String!"
                    ],
                    "jiraProject": [
                        7,
                        "String!"
                    ],
                    "jql": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationsSettings": [
                122,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationTemplates": [
                351,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "integrationTemplate": [
                353,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrations": [
                260,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "integration": [
                186,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "verifyGitHubEnterpriseServerInstallation": [
                354
            ],
            "integrationHasScopes": [
                355,
                {
                    "scopes": [
                        7,
                        "[String!]!"
                    ],
                    "integrationId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeUpdates": [
                356,
                {
                    "filter": [
                        358
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "initiativeUpdate": [
                33,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeToProjects": [
                359,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "initiativeToProject": [
                361,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiatives": [
                127,
                {
                    "filter": [
                        78
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "initiative": [
                34,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeRelations": [
                362,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "initiativeRelation": [
                207,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "favorites": [
                146,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "favorite": [
                143,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "externalUsers": [
                365,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "externalUser": [
                134,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "entityExternalLink": [
                121,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "emojis": [
                367,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "emoji": [
                369,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "documents": [
                194,
                {
                    "filter": [
                        77
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "document": [
                176,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "documentContentHistory": [
                370,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "cycles": [
                231,
                {
                    "filter": [
                        233
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "cycle": [
                148,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerTiers": [
                372,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "customerTier": [
                185,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerStatuses": [
                374,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "customerStatus": [
                183,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customers": [
                376,
                {
                    "filter": [
                        378
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "sorts": [
                        379,
                        "[CustomerSortInput!]"
                    ]
                }
            ],
            "customer": [
                182,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerNeeds": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "customerNeed": [
                210,
                {
                    "id": [
                        7
                    ],
                    "hash": [
                        7
                    ]
                }
            ],
            "issueTitleSuggestionFromCustomerRequest": [
                388,
                {
                    "request": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customViews": [
                389,
                {
                    "filter": [
                        391
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "customView": [
                149,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customViewDetailsSuggestion": [
                392,
                {
                    "modelName": [
                        7
                    ],
                    "filter": [
                        18,
                        "JSONObject!"
                    ]
                }
            ],
            "customViewHasSubscribers": [
                393,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "comment": [
                32,
                {
                    "id": [
                        7
                    ],
                    "hash": [
                        7
                    ]
                }
            ],
            "availableUsers": [
                394
            ],
            "authenticationSessions": [
                397
            ],
            "ssoUrlFromEmail": [
                399,
                {
                    "isDesktop": [
                        12
                    ],
                    "email": [
                        7,
                        "String!"
                    ]
                }
            ],
            "auditEntryTypes": [
                400
            ],
            "auditEntries": [
                401,
                {
                    "filter": [
                        404
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "attachments": [
                223,
                {
                    "filter": [
                        102
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "attachment": [
                211,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentsForURL": [
                223,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ],
                    "url": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentIssue": [
                16,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentSources": [
                405,
                {
                    "teamId": [
                        7
                    ]
                }
            ],
            "applicationInfo": [
                406,
                {
                    "clientId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "applicationInfoByIds": [
                406,
                {
                    "ids": [
                        7,
                        "[String!]!"
                    ]
                }
            ],
            "applicationInfoWithMembershipsByIds": [
                407,
                {
                    "clientIds": [
                        7,
                        "[String!]!"
                    ]
                }
            ],
            "applicationWithAuthorization": [
                409,
                {
                    "redirectUri": [
                        7
                    ],
                    "actor": [
                        7
                    ],
                    "scope": [
                        7,
                        "[String!]!"
                    ],
                    "clientId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "authorizedApplications": [
                412
            ],
            "workspaceAuthorizedApplications": [
                407
            ],
            "workspaceAuthorizedApplicationsWithAppUser": [
                413,
                {
                    "clientIds": [
                        7,
                        "[String!]"
                    ]
                }
            ],
            "workspaceAuthorizedApplication": [
                414,
                {
                    "clientId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "apiKeys": [
                415,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "agentContexts": [
                418,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "agentContext": [
                420,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "agentActivities": [
                430,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "agentActivity": [
                423,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "UserSettings": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "notificationDeliveryPreferences": [
                292
            ],
            "unsubscribedFrom": [
                7
            ],
            "user": [
                6
            ],
            "calendarHash": [
                7
            ],
            "subscribedToChangelog": [
                12
            ],
            "subscribedToDPA": [
                12
            ],
            "subscribedToInviteAccepted": [
                12
            ],
            "subscribedToPrivacyLegalUpdates": [
                12
            ],
            "showFullUserNames": [
                12
            ],
            "autoAssignToSelf": [
                12
            ],
            "notificationCategoryPreferences": [
                296
            ],
            "notificationChannelPreferences": [
                297
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferences": {
            "mobile": [
                293
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesChannel": {
            "notificationsDisabled": [
                12
            ],
            "schedule": [
                294
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesSchedule": {
            "disabled": [
                12
            ],
            "sunday": [
                295
            ],
            "monday": [
                295
            ],
            "tuesday": [
                295
            ],
            "wednesday": [
                295
            ],
            "thursday": [
                295
            ],
            "friday": [
                295
            ],
            "saturday": [
                295
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesDay": {
            "start": [
                7
            ],
            "end": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationCategoryPreferences": {
            "assignments": [
                297
            ],
            "statusChanges": [
                297
            ],
            "commentsAndReplies": [
                297
            ],
            "mentions": [
                297
            ],
            "reactions": [
                297
            ],
            "subscriptions": [
                297
            ],
            "documentChanges": [
                297
            ],
            "postsAndUpdates": [
                297
            ],
            "reminders": [
                297
            ],
            "reviews": [
                297
            ],
            "appsAndIntegrations": [
                297
            ],
            "system": [
                297
            ],
            "triage": [
                297
            ],
            "customers": [
                297
            ],
            "__typename": [
                7
            ]
        },
        "NotificationChannelPreferences": {
            "mobile": [
                12
            ],
            "desktop": [
                12
            ],
            "email": [
                12
            ],
            "slack": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityConnection": {
            "edges": [
                299
            ],
            "nodes": [
                234
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityEdge": {
            "node": [
                234
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TimeScheduleConnection": {
            "edges": [
                301
            ],
            "nodes": [
                237
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "TimeScheduleEdge": {
            "node": [
                237
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectFilterSuggestionPayload": {
            "filter": [
                18
            ],
            "logId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "SemanticSearchPayload": {
            "enabled": [
                12
            ],
            "results": [
                304
            ],
            "__typename": [
                7
            ]
        },
        "SemanticSearchResult": {
            "id": [
                4
            ],
            "type": [
                305
            ],
            "issue": [
                16
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "document": [
                176
            ],
            "__typename": [
                7
            ]
        },
        "SemanticSearchResultType": {},
        "DocumentSearchPayload": {
            "edges": [
                307
            ],
            "nodes": [
                308
            ],
            "pageInfo": [
                39
            ],
            "archivePayload": [
                309
            ],
            "totalCount": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "DocumentSearchResultEdge": {
            "node": [
                308
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "DocumentSearchResult": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "title": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "creator": [
                6
            ],
            "updatedBy": [
                6
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "team": [
                11
            ],
            "slugId": [
                7
            ],
            "lastAppliedTemplate": [
                26
            ],
            "hiddenAt": [
                5
            ],
            "trashed": [
                12
            ],
            "sortOrder": [
                9
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "content": [
                7
            ],
            "contentState": [
                7
            ],
            "documentContentId": [
                7
            ],
            "url": [
                7
            ],
            "metadata": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "ArchiveResponse": {
            "archive": [
                7
            ],
            "totalCount": [
                9
            ],
            "databaseVersion": [
                9
            ],
            "includesDependencies": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectSearchPayload": {
            "edges": [
                311
            ],
            "nodes": [
                312
            ],
            "pageInfo": [
                39
            ],
            "archivePayload": [
                309
            ],
            "totalCount": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ProjectSearchResultEdge": {
            "node": [
                312
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectSearchResult": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "updateReminderFrequencyInWeeks": [
                9
            ],
            "updateReminderFrequency": [
                9
            ],
            "frequencyResolution": [
                21
            ],
            "updateRemindersDay": [
                22
            ],
            "updateRemindersHour": [
                9
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "documentContent": [
                19
            ],
            "slugId": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "status": [
                23
            ],
            "creator": [
                6
            ],
            "lead": [
                6
            ],
            "facets": [
                10
            ],
            "projectUpdateRemindersPausedUntilAt": [
                5
            ],
            "startDate": [
                17
            ],
            "startDateResolution": [
                25
            ],
            "targetDate": [
                17
            ],
            "targetDateResolution": [
                25
            ],
            "startedAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "canceledAt": [
                5
            ],
            "autoArchivedAt": [
                5
            ],
            "trashed": [
                12
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "convertedFromIssue": [
                16
            ],
            "lastAppliedTemplate": [
                26
            ],
            "priority": [
                28
            ],
            "lastUpdate": [
                29
            ],
            "health": [
                30
            ],
            "healthUpdatedAt": [
                5
            ],
            "issueCountHistory": [
                9
            ],
            "completedIssueCountHistory": [
                9
            ],
            "scopeHistory": [
                9
            ],
            "completedScopeHistory": [
                9
            ],
            "inProgressScopeHistory": [
                9
            ],
            "progressHistory": [
                18
            ],
            "currentProgress": [
                18
            ],
            "slackNewIssue": [
                12
            ],
            "slackIssueComments": [
                12
            ],
            "slackIssueStatuses": [
                12
            ],
            "labelIds": [
                7
            ],
            "favorite": [
                143
            ],
            "url": [
                7
            ],
            "initiatives": [
                127,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "teams": [
                188,
                {
                    "filter": [
                        69
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "members": [
                190,
                {
                    "filter": [
                        68
                    ],
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectUpdates": [
                192,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "documents": [
                194,
                {
                    "filter": [
                        77
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "projectMilestones": [
                196,
                {
                    "filter": [
                        89
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "issues": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "externalLinks": [
                119,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "history": [
                200,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "labels": [
                203,
                {
                    "filter": [
                        108
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "progress": [
                9
            ],
            "scope": [
                9
            ],
            "integrationsSettings": [
                122
            ],
            "content": [
                7
            ],
            "contentState": [
                7
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "relations": [
                205,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "inverseRelations": [
                205,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "needs": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "state": [
                7
            ],
            "priorityLabel": [
                7
            ],
            "metadata": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "IssueSearchPayload": {
            "edges": [
                314
            ],
            "nodes": [
                315
            ],
            "pageInfo": [
                39
            ],
            "archivePayload": [
                309
            ],
            "totalCount": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "IssueSearchResultEdge": {
            "node": [
                315
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueSearchResult": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "number": [
                9
            ],
            "title": [
                7
            ],
            "priority": [
                9
            ],
            "estimate": [
                9
            ],
            "boardOrder": [
                9
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "startedAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "startedTriageAt": [
                5
            ],
            "triagedAt": [
                5
            ],
            "canceledAt": [
                5
            ],
            "autoClosedAt": [
                5
            ],
            "autoArchivedAt": [
                5
            ],
            "dueDate": [
                17
            ],
            "slaStartedAt": [
                5
            ],
            "slaMediumRiskAt": [
                5
            ],
            "slaHighRiskAt": [
                5
            ],
            "slaBreachesAt": [
                5
            ],
            "slaType": [
                7
            ],
            "addedToProjectAt": [
                5
            ],
            "addedToCycleAt": [
                5
            ],
            "addedToTeamAt": [
                5
            ],
            "trashed": [
                12
            ],
            "snoozedUntilAt": [
                5
            ],
            "suggestionsGeneratedAt": [
                5
            ],
            "activitySummary": [
                18
            ],
            "documentContent": [
                19
            ],
            "labelIds": [
                7
            ],
            "team": [
                11
            ],
            "cycle": [
                148
            ],
            "project": [
                20
            ],
            "projectMilestone": [
                198
            ],
            "lastAppliedTemplate": [
                26
            ],
            "recurringIssueTemplate": [
                26
            ],
            "previousIdentifiers": [
                7
            ],
            "creator": [
                6
            ],
            "externalUserCreator": [
                134
            ],
            "assignee": [
                6
            ],
            "supervisor": [
                6
            ],
            "snoozedBy": [
                6
            ],
            "state": [
                13
            ],
            "subIssueSortOrder": [
                9
            ],
            "reactionData": [
                18
            ],
            "priorityLabel": [
                7
            ],
            "sourceComment": [
                32
            ],
            "integrationSourceType": [
                214
            ],
            "botActor": [
                135
            ],
            "favorite": [
                143
            ],
            "identifier": [
                7
            ],
            "url": [
                7
            ],
            "branchName": [
                7
            ],
            "customerTicketCount": [
                28
            ],
            "subscribers": [
                190,
                {
                    "filter": [
                        68
                    ],
                    "includeDisabled": [
                        12
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "parent": [
                16
            ],
            "children": [
                14,
                {
                    "filter": [
                        107
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "comments": [
                129,
                {
                    "filter": [
                        97
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "history": [
                215,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "labels": [
                179,
                {
                    "filter": [
                        66
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "relations": [
                220,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "inverseRelations": [
                220,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "attachments": [
                223,
                {
                    "filter": [
                        102
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "formerAttachments": [
                223,
                {
                    "filter": [
                        102
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "description": [
                7
            ],
            "descriptionState": [
                7
            ],
            "reactions": [
                31
            ],
            "needs": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "formerNeeds": [
                208,
                {
                    "filter": [
                        96
                    ],
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "syncedWith": [
                137
            ],
            "suggestions": [
                225,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "incomingSuggestions": [
                225,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "metadata": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapToProjectConnection": {
            "edges": [
                317
            ],
            "nodes": [
                318
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapToProjectEdge": {
            "node": [
                318
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapToProject": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "project": [
                20
            ],
            "roadmap": [
                177
            ],
            "sortOrder": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapConnection": {
            "edges": [
                320
            ],
            "nodes": [
                177
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapEdge": {
            "node": [
                177
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "RateLimitPayload": {
            "identifier": [
                7
            ],
            "kind": [
                7
            ],
            "limits": [
                322
            ],
            "__typename": [
                7
            ]
        },
        "RateLimitResultPayload": {
            "type": [
                7
            ],
            "requestedAmount": [
                9
            ],
            "allowedAmount": [
                9
            ],
            "period": [
                9
            ],
            "remainingAmount": [
                9
            ],
            "reset": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "PushSubscriptionTestPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SendStrategy": {},
        "ProjectUpdateFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "user": [
                68
            ],
            "project": [
                40
            ],
            "reactions": [
                73
            ],
            "and": [
                325
            ],
            "or": [
                325
            ],
            "__typename": [
                7
            ]
        },
        "SummaryPayload": {
            "summary": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusConnection": {
            "edges": [
                328
            ],
            "nodes": [
                23
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusEdge": {
            "node": [
                23
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusCountPayload": {
            "count": [
                9
            ],
            "privateCount": [
                9
            ],
            "archivedTeamCount": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationExistsPayload": {
            "success": [
                12
            ],
            "exists": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationMeta": {
            "region": [
                7
            ],
            "allowedAuthServices": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInviteConnection": {
            "edges": [
                333
            ],
            "nodes": [
                334
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInviteEdge": {
            "node": [
                334
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInvite": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "email": [
                7
            ],
            "role": [
                335
            ],
            "external": [
                12
            ],
            "acceptedAt": [
                5
            ],
            "expiresAt": [
                5
            ],
            "metadata": [
                18
            ],
            "inviter": [
                6
            ],
            "invitee": [
                6
            ],
            "organization": [
                8
            ],
            "__typename": [
                7
            ]
        },
        "UserRoleType": {},
        "OrganizationInviteDetailsPayload": {
            "on_OrganizationInviteFullDetailsPayload": [
                337
            ],
            "on_OrganizationAcceptedOrExpiredInviteDetailsPayload": [
                339
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInviteFullDetailsPayload": {
            "status": [
                338
            ],
            "inviter": [
                7
            ],
            "email": [
                7
            ],
            "role": [
                335
            ],
            "createdAt": [
                5
            ],
            "organizationName": [
                7
            ],
            "organizationId": [
                7
            ],
            "organizationLogoUrl": [
                7
            ],
            "accepted": [
                12
            ],
            "expired": [
                12
            ],
            "allowedAuthServices": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInviteStatus": {},
        "OrganizationAcceptedOrExpiredInviteDetailsPayload": {
            "status": [
                338
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomainClaimPayload": {
            "verificationString": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationSubscriptionConnection": {
            "edges": [
                342
            ],
            "nodes": [
                1
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "NotificationSubscriptionEdge": {
            "node": [
                1
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationConnection": {
            "edges": [
                344
            ],
            "nodes": [
                278
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "NotificationEdge": {
            "node": [
                278
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "type": [
                44
            ],
            "archivedAt": [
                42
            ],
            "and": [
                345
            ],
            "or": [
                345
            ],
            "__typename": [
                7
            ]
        },
        "IssuePriorityValue": {
            "priority": [
                28
            ],
            "label": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueFilterSuggestionPayload": {
            "filter": [
                18
            ],
            "logId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueImportCheckPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueImportSyncCheckPayload": {
            "canSync": [
                12
            ],
            "error": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueImportJqlCheckPayload": {
            "success": [
                12
            ],
            "count": [
                9
            ],
            "error": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationTemplateConnection": {
            "edges": [
                352
            ],
            "nodes": [
                353
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationTemplateEdge": {
            "node": [
                353
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationTemplate": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "template": [
                26
            ],
            "integration": [
                186
            ],
            "foreignEntityId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitHubEnterpriseServerInstallVerificationPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationHasScopesPayload": {
            "hasAllScopes": [
                12
            ],
            "missingScopes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateConnection": {
            "edges": [
                357
            ],
            "nodes": [
                33
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateEdge": {
            "node": [
                33
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "user": [
                68
            ],
            "initiative": [
                78
            ],
            "reactions": [
                73
            ],
            "and": [
                358
            ],
            "or": [
                358
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeToProjectConnection": {
            "edges": [
                360
            ],
            "nodes": [
                361
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeToProjectEdge": {
            "node": [
                361
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeToProject": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "project": [
                20
            ],
            "initiative": [
                34
            ],
            "sortOrder": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeRelationConnection": {
            "edges": [
                363
            ],
            "nodes": [
                364
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeRelationEdge": {
            "node": [
                364
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeRelation": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "initiative": [
                34
            ],
            "relatedInitiative": [
                34
            ],
            "user": [
                6
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ExternalUserConnection": {
            "edges": [
                366
            ],
            "nodes": [
                134
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ExternalUserEdge": {
            "node": [
                134
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EmojiConnection": {
            "edges": [
                368
            ],
            "nodes": [
                369
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "EmojiEdge": {
            "node": [
                369
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Emoji": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "url": [
                7
            ],
            "source": [
                7
            ],
            "creator": [
                6
            ],
            "organization": [
                8
            ],
            "__typename": [
                7
            ]
        },
        "DocumentContentHistoryPayload": {
            "history": [
                371
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "DocumentContentHistoryType": {
            "id": [
                7
            ],
            "createdAt": [
                5
            ],
            "contentDataSnapshotAt": [
                5
            ],
            "contentData": [
                27
            ],
            "actorIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerTierConnection": {
            "edges": [
                373
            ],
            "nodes": [
                185
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CustomerTierEdge": {
            "node": [
                185
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusConnection": {
            "edges": [
                375
            ],
            "nodes": [
                183
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusEdge": {
            "node": [
                183
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerConnection": {
            "edges": [
                377
            ],
            "nodes": [
                182
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CustomerEdge": {
            "node": [
                182
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "slackChannelId": [
                44
            ],
            "domains": [
                92
            ],
            "externalIds": [
                92
            ],
            "owner": [
                51
            ],
            "needs": [
                80
            ],
            "revenue": [
                46
            ],
            "size": [
                46
            ],
            "status": [
                94
            ],
            "tier": [
                95
            ],
            "and": [
                378
            ],
            "or": [
                378
            ],
            "__typename": [
                7
            ]
        },
        "CustomerSortInput": {
            "name": [
                380
            ],
            "createdAt": [
                381
            ],
            "owner": [
                382
            ],
            "status": [
                383
            ],
            "revenue": [
                384
            ],
            "size": [
                385
            ],
            "tier": [
                386
            ],
            "approximateNeedCount": [
                387
            ],
            "__typename": [
                7
            ]
        },
        "NameSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CustomerCreatedAtSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "OwnerSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "RevenueSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "SizeSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "TierSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "ApproximateNeedCountSort": {
            "nulls": [
                112
            ],
            "order": [
                113
            ],
            "__typename": [
                7
            ]
        },
        "IssueTitleSuggestionFromCustomerRequestPayload": {
            "lastSyncId": [
                9
            ],
            "title": [
                7
            ],
            "logId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewConnection": {
            "edges": [
                390
            ],
            "nodes": [
                149
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewEdge": {
            "node": [
                149
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                44
            ],
            "modelName": [
                44
            ],
            "team": [
                65
            ],
            "creator": [
                68
            ],
            "shared": [
                50
            ],
            "hasFacet": [
                12
            ],
            "and": [
                391
            ],
            "or": [
                391
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewSuggestionPayload": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "icon": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewHasSubscribersPayload": {
            "hasSubscribers": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "AuthResolverResponse": {
            "id": [
                7
            ],
            "email": [
                7
            ],
            "allowDomainAccess": [
                12
            ],
            "users": [
                395
            ],
            "lockedUsers": [
                395
            ],
            "availableOrganizations": [
                396
            ],
            "lockedOrganizations": [
                396
            ],
            "lastUsedOrganizationId": [
                7
            ],
            "token": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AuthUser": {
            "id": [
                4
            ],
            "name": [
                7
            ],
            "displayName": [
                7
            ],
            "email": [
                7
            ],
            "avatarUrl": [
                7
            ],
            "role": [
                335
            ],
            "active": [
                12
            ],
            "userAccountId": [
                7
            ],
            "organization": [
                396
            ],
            "__typename": [
                7
            ]
        },
        "AuthOrganization": {
            "id": [
                4
            ],
            "name": [
                7
            ],
            "enabled": [
                12
            ],
            "urlKey": [
                7
            ],
            "previousUrlKeys": [
                7
            ],
            "logoUrl": [
                7
            ],
            "deletionRequestedAt": [
                5
            ],
            "releaseChannel": [
                257
            ],
            "samlEnabled": [
                12
            ],
            "samlSettings": [
                18
            ],
            "allowedAuthServices": [
                7
            ],
            "scimEnabled": [
                12
            ],
            "serviceId": [
                7
            ],
            "region": [
                7
            ],
            "userCount": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "AuthenticationSessionResponse": {
            "id": [
                7
            ],
            "type": [
                398
            ],
            "ip": [
                7
            ],
            "locationCountry": [
                7
            ],
            "locationCountryCode": [
                7
            ],
            "countryCodes": [
                7
            ],
            "locationRegionCode": [
                7
            ],
            "locationCity": [
                7
            ],
            "userAgent": [
                7
            ],
            "browserType": [
                7
            ],
            "service": [
                7
            ],
            "lastActiveAt": [
                5
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "location": [
                7
            ],
            "operatingSystem": [
                7
            ],
            "client": [
                7
            ],
            "name": [
                7
            ],
            "isCurrentSession": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "AuthenticationSessionType": {},
        "SsoUrlFromEmailResponse": {
            "success": [
                12
            ],
            "samlSsoUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AuditEntryType": {
            "type": [
                7
            ],
            "description": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AuditEntryConnection": {
            "edges": [
                402
            ],
            "nodes": [
                403
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "AuditEntryEdge": {
            "node": [
                403
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AuditEntry": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "type": [
                7
            ],
            "organization": [
                8
            ],
            "actor": [
                6
            ],
            "actorId": [
                7
            ],
            "ip": [
                7
            ],
            "countryCode": [
                7
            ],
            "metadata": [
                18
            ],
            "requestInformation": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "AuditEntryFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "type": [
                44
            ],
            "ip": [
                44
            ],
            "countryCode": [
                44
            ],
            "actor": [
                51
            ],
            "and": [
                404
            ],
            "or": [
                404
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentSourcesPayload": {
            "sources": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "Application": {
            "id": [
                7
            ],
            "clientId": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "developer": [
                7
            ],
            "developerUrl": [
                7
            ],
            "imageUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "WorkspaceAuthorizedApplication": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "developer": [
                7
            ],
            "developerUrl": [
                7
            ],
            "imageUrl": [
                7
            ],
            "scope": [
                7
            ],
            "appId": [
                7
            ],
            "clientId": [
                7
            ],
            "webhooksEnabled": [
                12
            ],
            "totalMembers": [
                9
            ],
            "memberships": [
                408
            ],
            "__typename": [
                7
            ]
        },
        "AuthMembership": {
            "userId": [
                7
            ],
            "authorizingUserId": [
                7
            ],
            "createdAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "UserAuthorizedApplication": {
            "id": [
                7
            ],
            "clientId": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "developer": [
                7
            ],
            "developerUrl": [
                7
            ],
            "imageUrl": [
                7
            ],
            "isAuthorized": [
                12
            ],
            "createdByLinear": [
                12
            ],
            "webhooksEnabled": [
                12
            ],
            "appUserAuthentication": [
                410
            ],
            "approvalErrorCode": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AppUserAuthentication": {
            "createdAt": [
                5
            ],
            "scope": [
                7
            ],
            "requestedSyncGroups": [
                12
            ],
            "authorizingUser": [
                411
            ],
            "__typename": [
                7
            ]
        },
        "AuthorizingUser": {
            "name": [
                7
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AuthorizedApplication": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "developer": [
                7
            ],
            "developerUrl": [
                7
            ],
            "imageUrl": [
                7
            ],
            "scope": [
                7
            ],
            "appId": [
                7
            ],
            "clientId": [
                7
            ],
            "webhooksEnabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "WorkspaceAuthorizedApplicationWithAppUser": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "developer": [
                7
            ],
            "developerUrl": [
                7
            ],
            "imageUrl": [
                7
            ],
            "scope": [
                7
            ],
            "appId": [
                7
            ],
            "clientId": [
                7
            ],
            "webhooksEnabled": [
                12
            ],
            "totalMembers": [
                9
            ],
            "appUser": [
                408
            ],
            "__typename": [
                7
            ]
        },
        "WorkspaceAuthorizedApplicationWithMemberships": {
            "client": [
                412
            ],
            "memberships": [
                408
            ],
            "totalMembers": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ApiKeyConnection": {
            "edges": [
                416
            ],
            "nodes": [
                417
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "ApiKeyEdge": {
            "node": [
                417
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ApiKey": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "label": [
                7
            ],
            "scope": [
                7
            ],
            "requestedSyncGroups": [
                7
            ],
            "organization": [
                8
            ],
            "__typename": [
                7
            ]
        },
        "AgentContextConnection": {
            "edges": [
                419
            ],
            "nodes": [
                420
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "AgentContextEdge": {
            "node": [
                420
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentContext": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "creator": [
                6
            ],
            "appUser": [
                6
            ],
            "comment": [
                32
            ],
            "issue": [
                16
            ],
            "status": [
                421
            ],
            "startedAt": [
                5
            ],
            "endedAt": [
                5
            ],
            "type": [
                422
            ],
            "activities": [
                423,
                {
                    "before": [
                        7
                    ],
                    "after": [
                        7
                    ],
                    "first": [
                        28
                    ],
                    "last": [
                        28
                    ],
                    "includeArchived": [
                        12
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "links": [
                121
            ],
            "summary": [
                7
            ],
            "sourceMetadata": [
                27
            ],
            "__typename": [
                7
            ]
        },
        "AgentContextStatus": {},
        "AgentContextType": {},
        "AgentActivity": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "agentContext": [
                420
            ],
            "type": [
                424
            ],
            "content": [
                425
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityType": {},
        "AgentActivityContent": {
            "on_AgentActivityObservationContent": [
                426
            ],
            "on_AgentActivityActionContent": [
                427
            ],
            "on_AgentActivityResponseContent": [
                428
            ],
            "on_AgentActivityErrorContent": [
                429
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityObservationContent": {
            "type": [
                424
            ],
            "body": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityActionContent": {
            "type": [
                424
            ],
            "action": [
                7
            ],
            "parameter": [
                7
            ],
            "result": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityResponseContent": {
            "type": [
                424
            ],
            "body": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityErrorContent": {
            "type": [
                424
            ],
            "body": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityConnection": {
            "edges": [
                431
            ],
            "nodes": [
                423
            ],
            "pageInfo": [
                39
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityEdge": {
            "node": [
                423
            ],
            "cursor": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "Mutation": {
            "workflowStateCreate": [
                433,
                {
                    "input": [
                        434,
                        "WorkflowStateCreateInput!"
                    ]
                }
            ],
            "workflowStateUpdate": [
                433,
                {
                    "input": [
                        435,
                        "WorkflowStateUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "workflowStateArchive": [
                436,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                438,
                {
                    "input": [
                        439,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookUpdate": [
                438,
                {
                    "input": [
                        440,
                        "WebhookUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "webhookDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "viewPreferencesCreate": [
                442,
                {
                    "input": [
                        443,
                        "ViewPreferencesCreateInput!"
                    ]
                }
            ],
            "viewPreferencesUpdate": [
                442,
                {
                    "input": [
                        446,
                        "ViewPreferencesUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "viewPreferencesDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userSettingsUpdate": [
                447,
                {
                    "input": [
                        448,
                        "UserSettingsUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userSettingsFlagsReset": [
                455,
                {
                    "flags": [
                        456,
                        "[UserFlagType!]"
                    ]
                }
            ],
            "userFlagUpdate": [
                457,
                {
                    "operation": [
                        458,
                        "UserFlagUpdateOperation!"
                    ],
                    "flag": [
                        456,
                        "UserFlagType!"
                    ]
                }
            ],
            "notificationCategoryChannelSubscriptionUpdate": [
                447,
                {
                    "channel": [
                        459,
                        "NotificationChannel!"
                    ],
                    "category": [
                        460,
                        "NotificationCategory!"
                    ],
                    "subscribe": [
                        12,
                        "Boolean!"
                    ]
                }
            ],
            "userUpdate": [
                461,
                {
                    "input": [
                        462,
                        "UserUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userDiscordConnect": [
                461,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userExternalUserDisconnect": [
                461,
                {
                    "service": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userPromoteAdmin": [
                463,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userDemoteAdmin": [
                463,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userPromoteMember": [
                463,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userDemoteMember": [
                463,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userSuspend": [
                463,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "userUnsuspend": [
                463,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "triageResponsibilityCreate": [
                464,
                {
                    "input": [
                        465,
                        "TriageResponsibilityCreateInput!"
                    ]
                }
            ],
            "triageResponsibilityUpdate": [
                464,
                {
                    "input": [
                        467,
                        "TriageResponsibilityUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "triageResponsibilityDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "timeScheduleCreate": [
                468,
                {
                    "input": [
                        469,
                        "TimeScheduleCreateInput!"
                    ]
                }
            ],
            "timeScheduleUpdate": [
                468,
                {
                    "input": [
                        471,
                        "TimeScheduleUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "timeScheduleUpsertExternal": [
                468,
                {
                    "input": [
                        471,
                        "TimeScheduleUpdateInput!"
                    ],
                    "externalId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "timeScheduleDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "timeScheduleRefreshIntegrationSchedule": [
                468,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "templateCreate": [
                472,
                {
                    "input": [
                        473,
                        "TemplateCreateInput!"
                    ]
                }
            ],
            "templateUpdate": [
                472,
                {
                    "input": [
                        474,
                        "TemplateUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "templateDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                475,
                {
                    "connectSlackChannel": [
                        12
                    ],
                    "input": [
                        476,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectUpdate": [
                475,
                {
                    "input": [
                        477,
                        "ProjectUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectReassignStatus": [
                478,
                {
                    "newProjectStatusId": [
                        7,
                        "String!"
                    ],
                    "originalProjectStatusId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectDelete": [
                479,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectArchive": [
                479,
                {
                    "trash": [
                        12
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectUnarchive": [
                479,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectAddLabel": [
                475,
                {
                    "labelId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectRemoveLabel": [
                475,
                {
                    "labelId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamCreate": [
                480,
                {
                    "copySettingsFromTeamId": [
                        7
                    ],
                    "input": [
                        481,
                        "TeamCreateInput!"
                    ]
                }
            ],
            "teamUpdate": [
                480,
                {
                    "mapping": [
                        483
                    ],
                    "input": [
                        484,
                        "TeamUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamUnarchive": [
                485,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamCyclesDelete": [
                480,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamMembershipCreate": [
                486,
                {
                    "input": [
                        487,
                        "TeamMembershipCreateInput!"
                    ]
                }
            ],
            "teamMembershipUpdate": [
                486,
                {
                    "input": [
                        488,
                        "TeamMembershipUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamMembershipDelete": [
                441,
                {
                    "alsoLeaveParentTeams": [
                        12
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "teamKeyDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmapToProjectCreate": [
                489,
                {
                    "input": [
                        490,
                        "RoadmapToProjectCreateInput!"
                    ]
                }
            ],
            "roadmapToProjectUpdate": [
                489,
                {
                    "input": [
                        491,
                        "RoadmapToProjectUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmapToProjectDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmapCreate": [
                492,
                {
                    "input": [
                        493,
                        "RoadmapCreateInput!"
                    ]
                }
            ],
            "roadmapUpdate": [
                492,
                {
                    "input": [
                        494,
                        "RoadmapUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmapArchive": [
                495,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmapUnarchive": [
                495,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "roadmapDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "createCsvExportReport": [
                496,
                {
                    "includePrivateTeamIds": [
                        7,
                        "[String!]"
                    ]
                }
            ],
            "reactionCreate": [
                497,
                {
                    "input": [
                        498,
                        "ReactionCreateInput!"
                    ]
                }
            ],
            "reactionDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "pushSubscriptionCreate": [
                499,
                {
                    "input": [
                        501,
                        "PushSubscriptionCreateInput!"
                    ]
                }
            ],
            "pushSubscriptionDelete": [
                499,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectUpdateCreate": [
                503,
                {
                    "input": [
                        504,
                        "ProjectUpdateCreateInput!"
                    ]
                }
            ],
            "projectUpdateUpdate": [
                503,
                {
                    "input": [
                        505,
                        "ProjectUpdateUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectUpdateArchive": [
                506,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectUpdateUnarchive": [
                506,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectUpdateDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "createProjectUpdateReminder": [
                507,
                {
                    "userId": [
                        7
                    ],
                    "projectId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectStatusCreate": [
                508,
                {
                    "input": [
                        509,
                        "ProjectStatusCreateInput!"
                    ]
                }
            ],
            "projectStatusUpdate": [
                508,
                {
                    "input": [
                        510,
                        "ProjectStatusUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectStatusArchive": [
                511,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectStatusUnarchive": [
                511,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectRelationCreate": [
                512,
                {
                    "input": [
                        513,
                        "ProjectRelationCreateInput!"
                    ]
                }
            ],
            "projectRelationUpdate": [
                512,
                {
                    "input": [
                        514,
                        "ProjectRelationUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectRelationDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectMilestoneCreate": [
                515,
                {
                    "input": [
                        516,
                        "ProjectMilestoneCreateInput!"
                    ]
                }
            ],
            "projectMilestoneUpdate": [
                515,
                {
                    "input": [
                        517,
                        "ProjectMilestoneUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectMilestoneDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "projectMilestoneMove": [
                518,
                {
                    "input": [
                        521,
                        "ProjectMilestoneMoveInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationUpdate": [
                524,
                {
                    "input": [
                        525,
                        "OrganizationUpdateInput!"
                    ]
                }
            ],
            "organizationDeleteChallenge": [
                527
            ],
            "organizationDelete": [
                527,
                {
                    "input": [
                        528,
                        "DeleteOrganizationInput!"
                    ]
                }
            ],
            "organizationCancelDelete": [
                529
            ],
            "organizationStartTrialForPlan": [
                530,
                {
                    "input": [
                        531,
                        "OrganizationStartTrialInput!"
                    ]
                }
            ],
            "organizationStartTrial": [
                530
            ],
            "organizationInviteCreate": [
                532,
                {
                    "input": [
                        533,
                        "OrganizationInviteCreateInput!"
                    ]
                }
            ],
            "organizationInviteUpdate": [
                532,
                {
                    "input": [
                        534,
                        "OrganizationInviteUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "resendOrganizationInvite": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "resendOrganizationInviteByEmail": [
                441,
                {
                    "email": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationInviteDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationDomainClaim": [
                535,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationDomainVerify": [
                536,
                {
                    "input": [
                        539,
                        "OrganizationDomainVerificationInput!"
                    ]
                }
            ],
            "organizationDomainCreate": [
                536,
                {
                    "triggerEmailVerification": [
                        12
                    ],
                    "input": [
                        540,
                        "OrganizationDomainCreateInput!"
                    ]
                }
            ],
            "organizationDomainUpdate": [
                536,
                {
                    "input": [
                        541,
                        "OrganizationDomainUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "organizationDomainDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notificationSubscriptionCreate": [
                542,
                {
                    "input": [
                        543,
                        "NotificationSubscriptionCreateInput!"
                    ]
                }
            ],
            "notificationSubscriptionUpdate": [
                542,
                {
                    "input": [
                        544,
                        "NotificationSubscriptionUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notificationSubscriptionDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notificationUpdate": [
                545,
                {
                    "input": [
                        546,
                        "NotificationUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notificationMarkReadAll": [
                547,
                {
                    "readAt": [
                        5,
                        "DateTime!"
                    ],
                    "input": [
                        548,
                        "NotificationEntityInput!"
                    ]
                }
            ],
            "notificationMarkUnreadAll": [
                547,
                {
                    "input": [
                        548,
                        "NotificationEntityInput!"
                    ]
                }
            ],
            "notificationSnoozeAll": [
                547,
                {
                    "snoozedUntilAt": [
                        5,
                        "DateTime!"
                    ],
                    "input": [
                        548,
                        "NotificationEntityInput!"
                    ]
                }
            ],
            "notificationUnsnoozeAll": [
                547,
                {
                    "unsnoozedAt": [
                        5,
                        "DateTime!"
                    ],
                    "input": [
                        548,
                        "NotificationEntityInput!"
                    ]
                }
            ],
            "notificationArchive": [
                549,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "notificationArchiveAll": [
                547,
                {
                    "input": [
                        548,
                        "NotificationEntityInput!"
                    ]
                }
            ],
            "notificationUnarchive": [
                549,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueCreate": [
                550,
                {
                    "input": [
                        551,
                        "IssueCreateInput!"
                    ]
                }
            ],
            "issueBatchCreate": [
                552,
                {
                    "input": [
                        553,
                        "IssueBatchCreateInput!"
                    ]
                }
            ],
            "issueUpdate": [
                550,
                {
                    "input": [
                        554,
                        "IssueUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueBatchUpdate": [
                552,
                {
                    "input": [
                        554,
                        "IssueUpdateInput!"
                    ],
                    "ids": [
                        555,
                        "[UUID!]!"
                    ]
                }
            ],
            "issueArchive": [
                556,
                {
                    "trash": [
                        12
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueUnarchive": [
                556,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueDelete": [
                556,
                {
                    "permanentlyDelete": [
                        12
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueAddLabel": [
                550,
                {
                    "labelId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueRemoveLabel": [
                550,
                {
                    "labelId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueReminder": [
                550,
                {
                    "reminderAt": [
                        5,
                        "DateTime!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueSubscribe": [
                550,
                {
                    "userId": [
                        7
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueUnsubscribe": [
                550,
                {
                    "userId": [
                        7
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueDescriptionUpdateFromFront": [
                550,
                {
                    "description": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "updateIssueSummary": [
                550,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueRelationCreate": [
                557,
                {
                    "overrideCreatedAt": [
                        5
                    ],
                    "input": [
                        558,
                        "IssueRelationCreateInput!"
                    ]
                }
            ],
            "issueRelationUpdate": [
                557,
                {
                    "input": [
                        560,
                        "IssueRelationUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueRelationDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueLabelCreate": [
                561,
                {
                    "replaceTeamLabels": [
                        12
                    ],
                    "input": [
                        562,
                        "IssueLabelCreateInput!"
                    ]
                }
            ],
            "issueLabelUpdate": [
                561,
                {
                    "replaceTeamLabels": [
                        12
                    ],
                    "input": [
                        563,
                        "IssueLabelUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueLabelDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueImportCreateGithub": [
                564,
                {
                    "teamId": [
                        7
                    ],
                    "teamName": [
                        7
                    ],
                    "githubRepoIds": [
                        28,
                        "[Int!]"
                    ],
                    "githubLabels": [
                        7,
                        "[String!]"
                    ],
                    "instantProcess": [
                        12
                    ],
                    "includeClosedIssues": [
                        12
                    ]
                }
            ],
            "issueImportCreateJira": [
                564,
                {
                    "teamId": [
                        7
                    ],
                    "teamName": [
                        7
                    ],
                    "jiraToken": [
                        7,
                        "String!"
                    ],
                    "jiraProject": [
                        7,
                        "String!"
                    ],
                    "jiraEmail": [
                        7,
                        "String!"
                    ],
                    "jiraHostname": [
                        7,
                        "String!"
                    ],
                    "jql": [
                        7
                    ],
                    "instantProcess": [
                        12
                    ],
                    "includeClosedIssues": [
                        12
                    ],
                    "id": [
                        7
                    ]
                }
            ],
            "issueImportCreateCSVJira": [
                564,
                {
                    "teamId": [
                        7
                    ],
                    "teamName": [
                        7
                    ],
                    "csvUrl": [
                        7,
                        "String!"
                    ],
                    "jiraHostname": [
                        7
                    ],
                    "jiraToken": [
                        7
                    ],
                    "jiraEmail": [
                        7
                    ]
                }
            ],
            "issueImportCreateClubhouse": [
                564,
                {
                    "teamId": [
                        7
                    ],
                    "teamName": [
                        7
                    ],
                    "clubhouseToken": [
                        7,
                        "String!"
                    ],
                    "clubhouseGroupName": [
                        7,
                        "String!"
                    ],
                    "instantProcess": [
                        12
                    ],
                    "includeClosedIssues": [
                        12
                    ],
                    "id": [
                        7
                    ]
                }
            ],
            "issueImportCreateAsana": [
                564,
                {
                    "teamId": [
                        7
                    ],
                    "teamName": [
                        7
                    ],
                    "asanaToken": [
                        7,
                        "String!"
                    ],
                    "asanaTeamName": [
                        7,
                        "String!"
                    ],
                    "instantProcess": [
                        12
                    ],
                    "includeClosedIssues": [
                        12
                    ],
                    "id": [
                        7
                    ]
                }
            ],
            "issueImportCreateLinearV2": [
                564,
                {
                    "linearSourceOrganizationId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ]
                }
            ],
            "issueImportDelete": [
                565,
                {
                    "issueImportId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueImportProcess": [
                564,
                {
                    "mapping": [
                        18,
                        "JSONObject!"
                    ],
                    "issueImportId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "issueImportUpdate": [
                564,
                {
                    "input": [
                        566,
                        "IssueImportUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationsSettingsCreate": [
                567,
                {
                    "input": [
                        568,
                        "IntegrationsSettingsCreateInput!"
                    ]
                }
            ],
            "integrationsSettingsUpdate": [
                567,
                {
                    "input": [
                        569,
                        "IntegrationsSettingsUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationTemplateCreate": [
                570,
                {
                    "input": [
                        571,
                        "IntegrationTemplateCreateInput!"
                    ]
                }
            ],
            "integrationTemplateDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                572,
                {
                    "input": [
                        573,
                        "IntegrationUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSettingsUpdate": [
                572,
                {
                    "input": [
                        574,
                        "IntegrationSettingsInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationGithubCommitCreate": [
                604
            ],
            "integrationGithubConnect": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ],
                    "installationId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationGithubImportConnect": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ],
                    "installationId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationGithubImportRefresh": [
                572,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationGitHubEnterpriseServerConnect": [
                605,
                {
                    "organizationName": [
                        7
                    ],
                    "githubUrl": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationGitlabConnect": [
                606,
                {
                    "gitlabUrl": [
                        7,
                        "String!"
                    ],
                    "accessToken": [
                        7,
                        "String!"
                    ]
                }
            ],
            "airbyteIntegrationConnect": [
                572,
                {
                    "input": [
                        607,
                        "AirbyteConfigurationInput!"
                    ]
                }
            ],
            "integrationGoogleCalendarPersonalConnect": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationLaunchDarklyConnect": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ],
                    "projectKey": [
                        7,
                        "String!"
                    ],
                    "environment": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationLaunchDarklyPersonalConnect": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "jiraIntegrationConnect": [
                572,
                {
                    "input": [
                        608,
                        "JiraConfigurationInput!"
                    ]
                }
            ],
            "integrationJiraUpdate": [
                572,
                {
                    "input": [
                        609,
                        "JiraUpdateInput!"
                    ]
                }
            ],
            "integrationJiraPersonal": [
                572,
                {
                    "code": [
                        7
                    ],
                    "accessToken": [
                        7
                    ]
                }
            ],
            "integrationGitHubPersonal": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationIntercom": [
                572,
                {
                    "domainUrl": [
                        7
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationIntercomDelete": [
                572
            ],
            "integrationCustomerDataAttributesRefresh": [
                572,
                {
                    "input": [
                        610,
                        "IntegrationCustomerDataAttributesRefreshInput!"
                    ]
                }
            ],
            "integrationIntercomSettingsUpdate": [
                572,
                {
                    "input": [
                        593,
                        "IntercomSettingsInput!"
                    ]
                }
            ],
            "integrationDiscord": [
                572,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationOpsgenieConnect": [
                572,
                {
                    "apiKey": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationOpsgenieRefreshScheduleMappings": [
                572
            ],
            "integrationPagerDutyConnect": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationPagerDutyRefreshScheduleMappings": [
                572
            ],
            "updateIntegrationSlackScopes": [
                572,
                {
                    "integrationId": [
                        7,
                        "String!"
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlack": [
                572,
                {
                    "shouldUseV2Auth": [
                        12
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackAsks": [
                572,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackPersonal": [
                572,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationAsksConnectChannel": [
                611,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackPost": [
                614,
                {
                    "shouldUseV2Auth": [
                        12
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "teamId": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackProjectPost": [
                614,
                {
                    "service": [
                        7,
                        "String!"
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "projectId": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackInitiativePost": [
                614,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "initiativeId": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackCustomViewNotifications": [
                614,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "customViewId": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackCustomerChannelLink": [
                478,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "customerId": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackOrgProjectUpdatesPost": [
                614,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackOrgInitiativeUpdatesPost": [
                614,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSlackImportEmojis": [
                572,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationFigma": [
                572,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationGoogleSheets": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "refreshGoogleSheetsData": [
                572,
                {
                    "type": [
                        7
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSentryConnect": [
                572,
                {
                    "organizationSlug": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ],
                    "installationId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationFront": [
                572,
                {
                    "redirectUri": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationZendesk": [
                572,
                {
                    "subdomain": [
                        7,
                        "String!"
                    ],
                    "code": [
                        7,
                        "String!"
                    ],
                    "scope": [
                        7,
                        "String!"
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationLoom": [
                572
            ],
            "integrationSalesforce": [
                572,
                {
                    "code": [
                        7,
                        "String!"
                    ],
                    "subdomain": [
                        7,
                        "String!"
                    ],
                    "redirectUri": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationSalesforceMetadataRefresh": [
                572,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationArchive": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "integrationRequest": [
                615,
                {
                    "input": [
                        616,
                        "IntegrationRequestInput!"
                    ]
                }
            ],
            "initiativeUpdateCreate": [
                617,
                {
                    "input": [
                        618,
                        "InitiativeUpdateCreateInput!"
                    ]
                }
            ],
            "initiativeUpdateUpdate": [
                617,
                {
                    "input": [
                        619,
                        "InitiativeUpdateUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeUpdateArchive": [
                620,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "createInitiativeUpdateReminder": [
                621,
                {
                    "userId": [
                        7
                    ],
                    "initiativeId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeUpdateUnarchive": [
                620,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeToProjectCreate": [
                622,
                {
                    "input": [
                        623,
                        "InitiativeToProjectCreateInput!"
                    ]
                }
            ],
            "initiativeToProjectUpdate": [
                622,
                {
                    "input": [
                        624,
                        "InitiativeToProjectUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeToProjectDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeCreate": [
                625,
                {
                    "input": [
                        626,
                        "InitiativeCreateInput!"
                    ]
                }
            ],
            "initiativeUpdate": [
                625,
                {
                    "input": [
                        627,
                        "InitiativeUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeArchive": [
                628,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeUnarchive": [
                628,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeRelationCreate": [
                629,
                {
                    "input": [
                        630,
                        "InitiativeRelationCreateInput!"
                    ]
                }
            ],
            "initiativeRelationUpdate": [
                441,
                {
                    "input": [
                        631,
                        "InitiativeRelationUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "initiativeRelationDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "gitAutomationTargetBranchCreate": [
                632,
                {
                    "input": [
                        633,
                        "GitAutomationTargetBranchCreateInput!"
                    ]
                }
            ],
            "gitAutomationTargetBranchUpdate": [
                632,
                {
                    "input": [
                        634,
                        "GitAutomationTargetBranchUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "gitAutomationTargetBranchDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "gitAutomationStateCreate": [
                635,
                {
                    "input": [
                        636,
                        "GitAutomationStateCreateInput!"
                    ]
                }
            ],
            "gitAutomationStateUpdate": [
                635,
                {
                    "input": [
                        637,
                        "GitAutomationStateUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "gitAutomationStateDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "fileUpload": [
                638,
                {
                    "metaData": [
                        27
                    ],
                    "makePublic": [
                        12
                    ],
                    "size": [
                        28,
                        "Int!"
                    ],
                    "contentType": [
                        7,
                        "String!"
                    ],
                    "filename": [
                        7,
                        "String!"
                    ]
                }
            ],
            "importFileUpload": [
                638,
                {
                    "metaData": [
                        27
                    ],
                    "size": [
                        28,
                        "Int!"
                    ],
                    "contentType": [
                        7,
                        "String!"
                    ],
                    "filename": [
                        7,
                        "String!"
                    ]
                }
            ],
            "imageUploadFromUrl": [
                641,
                {
                    "url": [
                        7,
                        "String!"
                    ]
                }
            ],
            "favoriteCreate": [
                642,
                {
                    "input": [
                        643,
                        "FavoriteCreateInput!"
                    ]
                }
            ],
            "favoriteUpdate": [
                642,
                {
                    "input": [
                        644,
                        "FavoriteUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "favoriteDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "entityExternalLinkCreate": [
                645,
                {
                    "input": [
                        646,
                        "EntityExternalLinkCreateInput!"
                    ]
                }
            ],
            "entityExternalLinkUpdate": [
                645,
                {
                    "input": [
                        647,
                        "EntityExternalLinkUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "entityExternalLinkDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "emojiCreate": [
                648,
                {
                    "input": [
                        649,
                        "EmojiCreateInput!"
                    ]
                }
            ],
            "emojiDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "emailUnsubscribe": [
                650,
                {
                    "input": [
                        651,
                        "EmailUnsubscribeInput!"
                    ]
                }
            ],
            "emailIntakeAddressCreate": [
                652,
                {
                    "input": [
                        654,
                        "EmailIntakeAddressCreateInput!"
                    ]
                }
            ],
            "emailIntakeAddressRotate": [
                652,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "emailIntakeAddressUpdate": [
                652,
                {
                    "input": [
                        655,
                        "EmailIntakeAddressUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "emailIntakeAddressDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "documentCreate": [
                656,
                {
                    "input": [
                        657,
                        "DocumentCreateInput!"
                    ]
                }
            ],
            "documentUpdate": [
                656,
                {
                    "input": [
                        658,
                        "DocumentUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "documentDelete": [
                659,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "documentUnarchive": [
                659,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "cycleCreate": [
                660,
                {
                    "input": [
                        661,
                        "CycleCreateInput!"
                    ]
                }
            ],
            "cycleUpdate": [
                660,
                {
                    "input": [
                        662,
                        "CycleUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "cycleArchive": [
                663,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "cycleShiftAll": [
                660,
                {
                    "input": [
                        664,
                        "CycleShiftAllInput!"
                    ]
                }
            ],
            "cycleStartUpcomingCycleToday": [
                660,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerTierCreate": [
                665,
                {
                    "input": [
                        666,
                        "CustomerTierCreateInput!"
                    ]
                }
            ],
            "customerTierUpdate": [
                665,
                {
                    "input": [
                        667,
                        "CustomerTierUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerTierDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerStatusCreate": [
                668,
                {
                    "input": [
                        669,
                        "CustomerStatusCreateInput!"
                    ]
                }
            ],
            "customerStatusUpdate": [
                668,
                {
                    "input": [
                        670,
                        "CustomerStatusUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerStatusDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerCreate": [
                671,
                {
                    "input": [
                        672,
                        "CustomerCreateInput!"
                    ]
                }
            ],
            "customerUpdate": [
                671,
                {
                    "input": [
                        673,
                        "CustomerUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerMerge": [
                671,
                {
                    "sourceCustomerId": [
                        7,
                        "String!"
                    ],
                    "targetCustomerId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerUpsert": [
                671,
                {
                    "input": [
                        674,
                        "CustomerUpsertInput!"
                    ]
                }
            ],
            "customerNeedCreate": [
                675,
                {
                    "input": [
                        676,
                        "CustomerNeedCreateInput!"
                    ]
                }
            ],
            "customerNeedCreateFromAttachment": [
                675,
                {
                    "input": [
                        677,
                        "CustomerNeedCreateFromAttachmentInput!"
                    ]
                }
            ],
            "customerNeedUpdate": [
                678,
                {
                    "input": [
                        679,
                        "CustomerNeedUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerNeedDelete": [
                441,
                {
                    "keepAttachment": [
                        12
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerNeedArchive": [
                680,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customerNeedUnarchive": [
                680,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customViewCreate": [
                681,
                {
                    "input": [
                        682,
                        "CustomViewCreateInput!"
                    ]
                }
            ],
            "customViewUpdate": [
                681,
                {
                    "input": [
                        684,
                        "CustomViewUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "customViewDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "contactCreate": [
                685,
                {
                    "input": [
                        686,
                        "ContactCreateInput!"
                    ]
                }
            ],
            "contactSalesCreate": [
                685,
                {
                    "input": [
                        687,
                        "ContactSalesCreateInput!"
                    ]
                }
            ],
            "commentCreate": [
                688,
                {
                    "input": [
                        689,
                        "CommentCreateInput!"
                    ]
                }
            ],
            "commentUpdate": [
                688,
                {
                    "input": [
                        690,
                        "CommentUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "commentDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "commentResolve": [
                688,
                {
                    "resolvingCommentId": [
                        7
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "commentUnresolve": [
                688,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "emailUserAccountAuthChallenge": [
                691,
                {
                    "input": [
                        692,
                        "EmailUserAccountAuthChallengeInput!"
                    ]
                }
            ],
            "emailTokenUserAccountAuth": [
                394,
                {
                    "input": [
                        693,
                        "TokenUserAccountAuthInput!"
                    ]
                }
            ],
            "samlTokenUserAccountAuth": [
                394,
                {
                    "input": [
                        693,
                        "TokenUserAccountAuthInput!"
                    ]
                }
            ],
            "googleUserAccountAuth": [
                394,
                {
                    "input": [
                        694,
                        "GoogleUserAccountAuthInput!"
                    ]
                }
            ],
            "passkeyLoginStart": [
                695,
                {
                    "authId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "passkeyLoginFinish": [
                394,
                {
                    "response": [
                        18,
                        "JSONObject!"
                    ],
                    "authId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "createOrganizationFromOnboarding": [
                696,
                {
                    "survey": [
                        697
                    ],
                    "input": [
                        698,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "joinOrganizationFromOnboarding": [
                696,
                {
                    "input": [
                        699,
                        "JoinOrganizationInput!"
                    ]
                }
            ],
            "leaveOrganization": [
                696,
                {
                    "organizationId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "logout": [
                700,
                {
                    "reason": [
                        7
                    ]
                }
            ],
            "logoutSession": [
                700,
                {
                    "sessionId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "logoutAllSessions": [
                700,
                {
                    "reason": [
                        7
                    ]
                }
            ],
            "logoutOtherSessions": [
                700,
                {
                    "reason": [
                        7
                    ]
                }
            ],
            "attachmentCreate": [
                701,
                {
                    "input": [
                        702,
                        "AttachmentCreateInput!"
                    ]
                }
            ],
            "attachmentUpdate": [
                701,
                {
                    "input": [
                        703,
                        "AttachmentUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentLinkURL": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "url": [
                        7,
                        "String!"
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ]
                }
            ],
            "attachmentLinkGitLabMR": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "url": [
                        7,
                        "String!"
                    ],
                    "projectPathWithNamespace": [
                        7,
                        "String!"
                    ],
                    "number": [
                        9,
                        "Float!"
                    ]
                }
            ],
            "attachmentLinkGitHubIssue": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "url": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentLinkGitHubPR": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "url": [
                        7,
                        "String!"
                    ],
                    "linkKind": [
                        704
                    ]
                }
            ],
            "attachmentLinkZendesk": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "ticketId": [
                        7,
                        "String!"
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "url": [
                        7
                    ]
                }
            ],
            "attachmentLinkDiscord": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "channelId": [
                        7,
                        "String!"
                    ],
                    "messageId": [
                        7,
                        "String!"
                    ],
                    "url": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentSyncToSlack": [
                701,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentLinkSlack": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "url": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "syncToCommentThread": [
                        12
                    ]
                }
            ],
            "attachmentLinkFront": [
                705,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "conversationId": [
                        7,
                        "String!"
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ]
                }
            ],
            "attachmentLinkIntercom": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "conversationId": [
                        7,
                        "String!"
                    ],
                    "partId": [
                        7
                    ],
                    "id": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentLinkJiraIssue": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "jiraIssueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "url": [
                        7
                    ]
                }
            ],
            "attachmentLinkSalesforce": [
                701,
                {
                    "createAsUser": [
                        7
                    ],
                    "displayIconUrl": [
                        7
                    ],
                    "title": [
                        7
                    ],
                    "issueId": [
                        7,
                        "String!"
                    ],
                    "id": [
                        7
                    ],
                    "url": [
                        7,
                        "String!"
                    ]
                }
            ],
            "attachmentDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "apiKeyCreate": [
                706,
                {
                    "input": [
                        707,
                        "ApiKeyCreateInput!"
                    ]
                }
            ],
            "apiKeyDelete": [
                441,
                {
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "apiKeyUpdate": [
                706,
                {
                    "input": [
                        708,
                        "ApiKeyUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "agentContextCreate": [
                709,
                {
                    "input": [
                        710,
                        "AgentContextCreateInput!"
                    ]
                }
            ],
            "agentContextUpdate": [
                709,
                {
                    "input": [
                        711,
                        "AgentContextUpdateInput!"
                    ],
                    "id": [
                        7,
                        "String!"
                    ]
                }
            ],
            "agentActivityCreate": [
                712,
                {
                    "input": [
                        713,
                        "AgentActivityCreateInput!"
                    ]
                }
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStatePayload": {
            "lastSyncId": [
                9
            ],
            "workflowState": [
                13
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateCreateInput": {
            "id": [
                7
            ],
            "type": [
                7
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "teamId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateUpdateInput": {
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "WorkflowStateArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                13
            ],
            "__typename": [
                7
            ]
        },
        "ArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "on_WorkflowStateArchivePayload": [
                436
            ],
            "on_DeletePayload": [
                441
            ],
            "on_ProjectArchivePayload": [
                479
            ],
            "on_TeamArchivePayload": [
                485
            ],
            "on_RoadmapArchivePayload": [
                495
            ],
            "on_ProjectUpdateArchivePayload": [
                506
            ],
            "on_ProjectStatusArchivePayload": [
                511
            ],
            "on_NotificationArchivePayload": [
                549
            ],
            "on_IssueArchivePayload": [
                556
            ],
            "on_InitiativeUpdateArchivePayload": [
                620
            ],
            "on_InitiativeArchivePayload": [
                628
            ],
            "on_DocumentArchivePayload": [
                659
            ],
            "on_CycleArchivePayload": [
                663
            ],
            "on_CustomerNeedArchivePayload": [
                680
            ],
            "__typename": [
                7
            ]
        },
        "WebhookPayload": {
            "lastSyncId": [
                9
            ],
            "webhook": [
                253
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "WebhookCreateInput": {
            "label": [
                7
            ],
            "id": [
                7
            ],
            "enabled": [
                12
            ],
            "secret": [
                7
            ],
            "url": [
                7
            ],
            "resourceTypes": [
                7
            ],
            "teamId": [
                7
            ],
            "allPublicTeams": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "WebhookUpdateInput": {
            "label": [
                7
            ],
            "secret": [
                7
            ],
            "enabled": [
                12
            ],
            "url": [
                7
            ],
            "resourceTypes": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "DeletePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entityId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ViewPreferencesPayload": {
            "lastSyncId": [
                9
            ],
            "viewPreferences": [
                174
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ViewPreferencesCreateInput": {
            "id": [
                7
            ],
            "type": [
                444
            ],
            "viewType": [
                445
            ],
            "preferences": [
                18
            ],
            "insights": [
                18
            ],
            "teamId": [
                7
            ],
            "projectId": [
                7
            ],
            "roadmapId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "labelId": [
                7
            ],
            "projectLabelId": [
                7
            ],
            "customViewId": [
                7
            ],
            "userId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ViewPreferencesType": {},
        "ViewType": {},
        "ViewPreferencesUpdateInput": {
            "preferences": [
                18
            ],
            "insights": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "UserSettingsPayload": {
            "lastSyncId": [
                9
            ],
            "userSettings": [
                291
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "UserSettingsUpdateInput": {
            "settings": [
                18
            ],
            "subscribedToChangelog": [
                12
            ],
            "subscribedToDPA": [
                12
            ],
            "subscribedToInviteAccepted": [
                12
            ],
            "subscribedToPrivacyLegalUpdates": [
                12
            ],
            "notificationCategoryPreferences": [
                449
            ],
            "notificationChannelPreferences": [
                450
            ],
            "notificationDeliveryPreferences": [
                451
            ],
            "usageWarningHistory": [
                18
            ],
            "feedSummarySchedule": [
                133
            ],
            "__typename": [
                7
            ]
        },
        "NotificationCategoryPreferencesInput": {
            "assignments": [
                450
            ],
            "statusChanges": [
                450
            ],
            "commentsAndReplies": [
                450
            ],
            "mentions": [
                450
            ],
            "reactions": [
                450
            ],
            "subscriptions": [
                450
            ],
            "documentChanges": [
                450
            ],
            "postsAndUpdates": [
                450
            ],
            "reminders": [
                450
            ],
            "reviews": [
                450
            ],
            "appsAndIntegrations": [
                450
            ],
            "triage": [
                450
            ],
            "customers": [
                450
            ],
            "__typename": [
                7
            ]
        },
        "PartialNotificationChannelPreferencesInput": {
            "mobile": [
                12
            ],
            "desktop": [
                12
            ],
            "email": [
                12
            ],
            "slack": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesInput": {
            "mobile": [
                452
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesChannelInput": {
            "schedule": [
                453
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesScheduleInput": {
            "disabled": [
                12
            ],
            "sunday": [
                454
            ],
            "monday": [
                454
            ],
            "tuesday": [
                454
            ],
            "wednesday": [
                454
            ],
            "thursday": [
                454
            ],
            "friday": [
                454
            ],
            "saturday": [
                454
            ],
            "__typename": [
                7
            ]
        },
        "NotificationDeliveryPreferencesDayInput": {
            "start": [
                7
            ],
            "end": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "UserSettingsFlagsResetPayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "UserFlagType": {},
        "UserSettingsFlagPayload": {
            "lastSyncId": [
                9
            ],
            "flag": [
                7
            ],
            "value": [
                28
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "UserFlagUpdateOperation": {},
        "NotificationChannel": {},
        "NotificationCategory": {},
        "UserPayload": {
            "lastSyncId": [
                9
            ],
            "user": [
                6
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "UserUpdateInput": {
            "name": [
                7
            ],
            "displayName": [
                7
            ],
            "avatarUrl": [
                7
            ],
            "description": [
                7
            ],
            "statusEmoji": [
                7
            ],
            "statusLabel": [
                7
            ],
            "statusUntilAt": [
                5
            ],
            "timezone": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "UserAdminPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityPayload": {
            "lastSyncId": [
                9
            ],
            "triageResponsibility": [
                234
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityCreateInput": {
            "id": [
                7
            ],
            "teamId": [
                7
            ],
            "action": [
                7
            ],
            "manualSelection": [
                466
            ],
            "timeScheduleId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityManualSelectionInput": {
            "userIds": [
                7
            ],
            "assignmentIndex": [
                28
            ],
            "__typename": [
                7
            ]
        },
        "TriageResponsibilityUpdateInput": {
            "action": [
                7
            ],
            "manualSelection": [
                466
            ],
            "timeScheduleId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TimeSchedulePayload": {
            "lastSyncId": [
                9
            ],
            "timeSchedule": [
                237
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TimeScheduleCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "entries": [
                470
            ],
            "externalId": [
                7
            ],
            "externalUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TimeScheduleEntryInput": {
            "startsAt": [
                5
            ],
            "endsAt": [
                5
            ],
            "userId": [
                7
            ],
            "userEmail": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TimeScheduleUpdateInput": {
            "name": [
                7
            ],
            "entries": [
                470
            ],
            "externalId": [
                7
            ],
            "externalUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "TemplatePayload": {
            "lastSyncId": [
                9
            ],
            "template": [
                26
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TemplateCreateInput": {
            "id": [
                7
            ],
            "type": [
                7
            ],
            "teamId": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "templateData": [
                27
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "TemplateUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "teamId": [
                7
            ],
            "templateData": [
                27
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ProjectPayload": {
            "lastSyncId": [
                9
            ],
            "project": [
                20
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "statusId": [
                7
            ],
            "description": [
                7
            ],
            "content": [
                7
            ],
            "teamIds": [
                7
            ],
            "convertedFromIssueId": [
                7
            ],
            "lastAppliedTemplateId": [
                7
            ],
            "leadId": [
                7
            ],
            "memberIds": [
                7
            ],
            "startDate": [
                17
            ],
            "startDateResolution": [
                25
            ],
            "targetDate": [
                17
            ],
            "targetDateResolution": [
                25
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "priority": [
                28
            ],
            "labelIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateInput": {
            "statusId": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "content": [
                7
            ],
            "convertedFromIssueId": [
                7
            ],
            "lastAppliedTemplateId": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "teamIds": [
                7
            ],
            "projectUpdateRemindersPausedUntilAt": [
                5
            ],
            "updateReminderFrequencyInWeeks": [
                9
            ],
            "updateReminderFrequency": [
                9
            ],
            "frequencyResolution": [
                21
            ],
            "updateRemindersDay": [
                22
            ],
            "updateRemindersHour": [
                28
            ],
            "leadId": [
                7
            ],
            "memberIds": [
                7
            ],
            "startDate": [
                17
            ],
            "startDateResolution": [
                25
            ],
            "targetDate": [
                17
            ],
            "targetDateResolution": [
                25
            ],
            "completedAt": [
                5
            ],
            "canceledAt": [
                5
            ],
            "slackNewIssue": [
                12
            ],
            "slackIssueComments": [
                12
            ],
            "slackIssueStatuses": [
                12
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "trashed": [
                12
            ],
            "priority": [
                28
            ],
            "labelIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "SuccessPayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                20
            ],
            "__typename": [
                7
            ]
        },
        "TeamPayload": {
            "lastSyncId": [
                9
            ],
            "team": [
                11
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TeamCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "key": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "cyclesEnabled": [
                12
            ],
            "cycleStartDay": [
                9
            ],
            "cycleDuration": [
                28
            ],
            "cycleCooldownTime": [
                28
            ],
            "cycleIssueAutoAssignStarted": [
                12
            ],
            "cycleIssueAutoAssignCompleted": [
                12
            ],
            "cycleLockToActive": [
                12
            ],
            "upcomingCycleCount": [
                9
            ],
            "triageEnabled": [
                12
            ],
            "requirePriorityToLeaveTriage": [
                12
            ],
            "timezone": [
                7
            ],
            "inheritIssueEstimation": [
                12
            ],
            "inheritWorkflowStatuses": [
                12
            ],
            "issueEstimationType": [
                7
            ],
            "issueEstimationAllowZero": [
                12
            ],
            "setIssueSortOrderOnStateChange": [
                7
            ],
            "issueEstimationExtended": [
                12
            ],
            "defaultIssueEstimate": [
                9
            ],
            "groupIssueHistory": [
                12
            ],
            "defaultTemplateForMembersId": [
                7
            ],
            "defaultTemplateForNonMembersId": [
                7
            ],
            "defaultProjectTemplateId": [
                7
            ],
            "private": [
                12
            ],
            "autoClosePeriod": [
                9
            ],
            "autoCloseStateId": [
                7
            ],
            "autoArchivePeriod": [
                9
            ],
            "markedAsDuplicateWorkflowStateId": [
                7
            ],
            "parentId": [
                7
            ],
            "inheritProductIntelligenceScope": [
                12
            ],
            "productIntelligenceScope": [
                482
            ],
            "__typename": [
                7
            ]
        },
        "ProductIntelligenceScope": {},
        "InheritanceEntityMapping": {
            "workflowStates": [
                18
            ],
            "issueLabels": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "TeamUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "key": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "cyclesEnabled": [
                12
            ],
            "cycleStartDay": [
                9
            ],
            "cycleDuration": [
                28
            ],
            "cycleCooldownTime": [
                28
            ],
            "cycleIssueAutoAssignStarted": [
                12
            ],
            "cycleIssueAutoAssignCompleted": [
                12
            ],
            "cycleLockToActive": [
                12
            ],
            "cycleEnabledStartDate": [
                5
            ],
            "upcomingCycleCount": [
                9
            ],
            "timezone": [
                7
            ],
            "inheritIssueEstimation": [
                12
            ],
            "issueEstimationType": [
                7
            ],
            "issueEstimationAllowZero": [
                12
            ],
            "setIssueSortOrderOnStateChange": [
                7
            ],
            "issueEstimationExtended": [
                12
            ],
            "defaultIssueEstimate": [
                9
            ],
            "slackNewIssue": [
                12
            ],
            "slackIssueComments": [
                12
            ],
            "slackIssueStatuses": [
                12
            ],
            "groupIssueHistory": [
                12
            ],
            "aiThreadSummariesEnabled": [
                12
            ],
            "defaultTemplateForMembersId": [
                7
            ],
            "defaultTemplateForNonMembersId": [
                7
            ],
            "defaultProjectTemplateId": [
                7
            ],
            "private": [
                12
            ],
            "triageEnabled": [
                12
            ],
            "requirePriorityToLeaveTriage": [
                12
            ],
            "defaultIssueStateId": [
                7
            ],
            "autoClosePeriod": [
                9
            ],
            "autoCloseStateId": [
                7
            ],
            "autoCloseParentIssues": [
                12
            ],
            "autoCloseChildIssues": [
                12
            ],
            "autoArchivePeriod": [
                9
            ],
            "markedAsDuplicateWorkflowStateId": [
                7
            ],
            "joinByDefault": [
                12
            ],
            "scimManaged": [
                12
            ],
            "parentId": [
                7
            ],
            "inheritWorkflowStatuses": [
                12
            ],
            "inheritProductIntelligenceScope": [
                12
            ],
            "productIntelligenceScope": [
                482
            ],
            "__typename": [
                7
            ]
        },
        "TeamArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                11
            ],
            "__typename": [
                7
            ]
        },
        "TeamMembershipPayload": {
            "lastSyncId": [
                9
            ],
            "teamMembership": [
                239
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TeamMembershipCreateInput": {
            "id": [
                7
            ],
            "userId": [
                7
            ],
            "teamId": [
                7
            ],
            "owner": [
                12
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "TeamMembershipUpdateInput": {
            "owner": [
                12
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapToProjectPayload": {
            "lastSyncId": [
                9
            ],
            "roadmapToProject": [
                318
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapToProjectCreateInput": {
            "id": [
                7
            ],
            "projectId": [
                7
            ],
            "roadmapId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapToProjectUpdateInput": {
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapPayload": {
            "lastSyncId": [
                9
            ],
            "roadmap": [
                177
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "ownerId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "color": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "ownerId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "color": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "RoadmapArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                177
            ],
            "__typename": [
                7
            ]
        },
        "CreateCsvExportReportPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ReactionPayload": {
            "lastSyncId": [
                9
            ],
            "reaction": [
                31
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ReactionCreateInput": {
            "id": [
                7
            ],
            "emoji": [
                7
            ],
            "commentId": [
                7
            ],
            "projectUpdateId": [
                7
            ],
            "initiativeUpdateId": [
                7
            ],
            "issueId": [
                7
            ],
            "postId": [
                7
            ],
            "pullRequestId": [
                7
            ],
            "pullRequestCommentId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "PushSubscriptionPayload": {
            "lastSyncId": [
                9
            ],
            "entity": [
                500
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "PushSubscription": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "PushSubscriptionCreateInput": {
            "id": [
                7
            ],
            "data": [
                7
            ],
            "type": [
                502
            ],
            "__typename": [
                7
            ]
        },
        "PushSubscriptionType": {},
        "ProjectUpdatePayload": {
            "lastSyncId": [
                9
            ],
            "projectUpdate": [
                29
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateCreateInput": {
            "id": [
                7
            ],
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "projectId": [
                7
            ],
            "health": [
                30
            ],
            "isDiffHidden": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateUpdateInput": {
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "health": [
                30
            ],
            "isDiffHidden": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                29
            ],
            "__typename": [
                7
            ]
        },
        "ProjectUpdateReminderPayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusPayload": {
            "lastSyncId": [
                9
            ],
            "status": [
                23
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "type": [
                24
            ],
            "indefinite": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusUpdateInput": {
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "type": [
                24
            ],
            "indefinite": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectStatusArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                23
            ],
            "__typename": [
                7
            ]
        },
        "ProjectRelationPayload": {
            "lastSyncId": [
                9
            ],
            "projectRelation": [
                207
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectRelationCreateInput": {
            "id": [
                7
            ],
            "type": [
                7
            ],
            "projectId": [
                7
            ],
            "projectMilestoneId": [
                7
            ],
            "anchorType": [
                7
            ],
            "relatedProjectId": [
                7
            ],
            "relatedProjectMilestoneId": [
                7
            ],
            "relatedAnchorType": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectRelationUpdateInput": {
            "type": [
                7
            ],
            "projectId": [
                7
            ],
            "projectMilestoneId": [
                7
            ],
            "anchorType": [
                7
            ],
            "relatedProjectId": [
                7
            ],
            "relatedProjectMilestoneId": [
                7
            ],
            "relatedAnchorType": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestonePayload": {
            "lastSyncId": [
                9
            ],
            "projectMilestone": [
                198
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "descriptionData": [
                18
            ],
            "targetDate": [
                17
            ],
            "projectId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "descriptionData": [
                18
            ],
            "targetDate": [
                17
            ],
            "sortOrder": [
                9
            ],
            "projectId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneMovePayload": {
            "lastSyncId": [
                9
            ],
            "projectMilestone": [
                198
            ],
            "success": [
                12
            ],
            "previousIssueTeamIds": [
                519
            ],
            "previousProjectTeamIds": [
                520
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneMoveIssueToTeam": {
            "issueId": [
                7
            ],
            "teamId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneMoveProjectTeams": {
            "projectId": [
                7
            ],
            "teamIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneMoveInput": {
            "projectId": [
                7
            ],
            "newIssueTeamId": [
                7
            ],
            "addIssueTeamToProject": [
                12
            ],
            "undoIssueTeamIds": [
                522
            ],
            "undoProjectTeamIds": [
                523
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneMoveIssueToTeamInput": {
            "issueId": [
                7
            ],
            "teamId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ProjectMilestoneMoveProjectTeamsInput": {
            "projectId": [
                7
            ],
            "teamIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationPayload": {
            "lastSyncId": [
                9
            ],
            "organization": [
                8
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationUpdateInput": {
            "name": [
                7
            ],
            "logoUrl": [
                7
            ],
            "urlKey": [
                7
            ],
            "gitBranchFormat": [
                7
            ],
            "gitLinkbackMessagesEnabled": [
                12
            ],
            "gitPublicLinkbackMessagesEnabled": [
                12
            ],
            "roadmapEnabled": [
                12
            ],
            "projectUpdateReminderFrequencyInWeeks": [
                9
            ],
            "projectUpdateRemindersDay": [
                22
            ],
            "projectUpdateRemindersHour": [
                9
            ],
            "initiativeUpdateReminderFrequencyInWeeks": [
                9
            ],
            "initiativeUpdateRemindersDay": [
                22
            ],
            "initiativeUpdateRemindersHour": [
                9
            ],
            "fiscalYearStartMonth": [
                9
            ],
            "workingDays": [
                9
            ],
            "reducedPersonalInformation": [
                12
            ],
            "oauthAppReview": [
                12
            ],
            "allowedAuthServices": [
                7
            ],
            "slaEnabled": [
                12
            ],
            "allowMembersToInvite": [
                12
            ],
            "restrictTeamCreationToAdmins": [
                12
            ],
            "restrictLabelManagementToAdmins": [
                12
            ],
            "restrictAgentInvocationToMembers": [
                12
            ],
            "ipRestrictions": [
                526
            ],
            "themeSettings": [
                18
            ],
            "customersEnabled": [
                12
            ],
            "customersConfiguration": [
                18
            ],
            "feedEnabled": [
                12
            ],
            "defaultFeedSummarySchedule": [
                133
            ],
            "aiAddonEnabled": [
                12
            ],
            "aiTelemetryEnabled": [
                12
            ],
            "personalApiKeysEnabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationIpRestrictionInput": {
            "range": [
                7
            ],
            "type": [
                7
            ],
            "description": [
                7
            ],
            "enabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDeletePayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "DeleteOrganizationInput": {
            "deletionCode": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationCancelDeletePayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationStartTrialPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationStartTrialInput": {
            "planType": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInvitePayload": {
            "lastSyncId": [
                9
            ],
            "organizationInvite": [
                334
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInviteCreateInput": {
            "id": [
                7
            ],
            "email": [
                7
            ],
            "role": [
                335
            ],
            "teamIds": [
                7
            ],
            "metadata": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationInviteUpdateInput": {
            "teamIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomainSimplePayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomainPayload": {
            "lastSyncId": [
                9
            ],
            "organizationDomain": [
                537
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomain": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "name": [
                7
            ],
            "verified": [
                12
            ],
            "verificationEmail": [
                7
            ],
            "creator": [
                6
            ],
            "authType": [
                538
            ],
            "claimed": [
                12
            ],
            "disableOrganizationCreation": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomainAuthType": {},
        "OrganizationDomainVerificationInput": {
            "organizationDomainId": [
                7
            ],
            "verificationCode": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomainCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "verificationEmail": [
                7
            ],
            "authType": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OrganizationDomainUpdateInput": {
            "disableOrganizationCreation": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationSubscriptionPayload": {
            "lastSyncId": [
                9
            ],
            "notificationSubscription": [
                1
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationSubscriptionCreateInput": {
            "id": [
                7
            ],
            "customerId": [
                7
            ],
            "customViewId": [
                7
            ],
            "cycleId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "labelId": [
                7
            ],
            "projectId": [
                7
            ],
            "teamId": [
                7
            ],
            "userId": [
                7
            ],
            "contextViewType": [
                123
            ],
            "userContextViewType": [
                269
            ],
            "notificationSubscriptionTypes": [
                7
            ],
            "active": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationSubscriptionUpdateInput": {
            "notificationSubscriptionTypes": [
                7
            ],
            "active": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationPayload": {
            "lastSyncId": [
                9
            ],
            "notification": [
                278
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationUpdateInput": {
            "readAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "projectUpdateId": [
                7
            ],
            "initiativeUpdateId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationBatchActionPayload": {
            "lastSyncId": [
                9
            ],
            "notifications": [
                278
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "NotificationEntityInput": {
            "issueId": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "projectUpdateId": [
                7
            ],
            "initiativeUpdateId": [
                7
            ],
            "oauthClientApprovalId": [
                7
            ],
            "id": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotificationArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                278
            ],
            "__typename": [
                7
            ]
        },
        "IssuePayload": {
            "lastSyncId": [
                9
            ],
            "issue": [
                16
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueCreateInput": {
            "id": [
                7
            ],
            "title": [
                7
            ],
            "description": [
                7
            ],
            "descriptionData": [
                27
            ],
            "assigneeId": [
                7
            ],
            "parentId": [
                7
            ],
            "priority": [
                28
            ],
            "estimate": [
                28
            ],
            "subscriberIds": [
                7
            ],
            "labelIds": [
                7
            ],
            "teamId": [
                7
            ],
            "cycleId": [
                7
            ],
            "projectId": [
                7
            ],
            "projectMilestoneId": [
                7
            ],
            "lastAppliedTemplateId": [
                7
            ],
            "stateId": [
                7
            ],
            "referenceCommentId": [
                7
            ],
            "sourceCommentId": [
                7
            ],
            "sourcePullRequestCommentId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "subIssueSortOrder": [
                9
            ],
            "dueDate": [
                17
            ],
            "createAsUser": [
                7
            ],
            "displayIconUrl": [
                7
            ],
            "preserveSortOrderOnCreate": [
                12
            ],
            "createdAt": [
                5
            ],
            "slaBreachesAt": [
                5
            ],
            "slaStartedAt": [
                5
            ],
            "templateId": [
                7
            ],
            "completedAt": [
                5
            ],
            "slaType": [
                258
            ],
            "__typename": [
                7
            ]
        },
        "IssueBatchPayload": {
            "lastSyncId": [
                9
            ],
            "issues": [
                16
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueBatchCreateInput": {
            "issues": [
                551
            ],
            "__typename": [
                7
            ]
        },
        "IssueUpdateInput": {
            "title": [
                7
            ],
            "description": [
                7
            ],
            "descriptionData": [
                27
            ],
            "assigneeId": [
                7
            ],
            "parentId": [
                7
            ],
            "priority": [
                28
            ],
            "estimate": [
                28
            ],
            "subscriberIds": [
                7
            ],
            "labelIds": [
                7
            ],
            "addedLabelIds": [
                7
            ],
            "removedLabelIds": [
                7
            ],
            "teamId": [
                7
            ],
            "cycleId": [
                7
            ],
            "projectId": [
                7
            ],
            "projectMilestoneId": [
                7
            ],
            "lastAppliedTemplateId": [
                7
            ],
            "stateId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "prioritySortOrder": [
                9
            ],
            "subIssueSortOrder": [
                9
            ],
            "dueDate": [
                17
            ],
            "trashed": [
                12
            ],
            "slaBreachesAt": [
                5
            ],
            "slaStartedAt": [
                5
            ],
            "snoozedUntilAt": [
                5
            ],
            "snoozedById": [
                7
            ],
            "slaType": [
                258
            ],
            "autoClosedByParentClosing": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "UUID": {},
        "IssueArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                16
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelationPayload": {
            "lastSyncId": [
                9
            ],
            "issueRelation": [
                222
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelationCreateInput": {
            "id": [
                7
            ],
            "type": [
                559
            ],
            "issueId": [
                7
            ],
            "relatedIssueId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueRelationType": {},
        "IssueRelationUpdateInput": {
            "type": [
                7
            ],
            "issueId": [
                7
            ],
            "relatedIssueId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelPayload": {
            "lastSyncId": [
                9
            ],
            "issueLabel": [
                178
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "color": [
                7
            ],
            "parentId": [
                7
            ],
            "teamId": [
                7
            ],
            "isGroup": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueLabelUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "parentId": [
                7
            ],
            "color": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IssueImportPayload": {
            "lastSyncId": [
                9
            ],
            "issueImport": [
                219
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueImportDeletePayload": {
            "lastSyncId": [
                9
            ],
            "issueImport": [
                219
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IssueImportUpdateInput": {
            "mapping": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationsSettingsPayload": {
            "lastSyncId": [
                9
            ],
            "integrationsSettings": [
                122
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationsSettingsCreateInput": {
            "slackIssueCreated": [
                12
            ],
            "slackIssueAddedToView": [
                12
            ],
            "slackIssueNewComment": [
                12
            ],
            "slackIssueStatusChangedDone": [
                12
            ],
            "slackIssueStatusChangedAll": [
                12
            ],
            "slackProjectUpdateCreated": [
                12
            ],
            "slackProjectUpdateCreatedToTeam": [
                12
            ],
            "slackProjectUpdateCreatedToWorkspace": [
                12
            ],
            "slackInitiativeUpdateCreated": [
                12
            ],
            "slackIssueAddedToTriage": [
                12
            ],
            "slackIssueSlaHighRisk": [
                12
            ],
            "slackIssueSlaBreached": [
                12
            ],
            "id": [
                7
            ],
            "teamId": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "customViewId": [
                7
            ],
            "contextViewType": [
                123
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationsSettingsUpdateInput": {
            "slackIssueCreated": [
                12
            ],
            "slackIssueAddedToView": [
                12
            ],
            "slackIssueNewComment": [
                12
            ],
            "slackIssueStatusChangedDone": [
                12
            ],
            "slackIssueStatusChangedAll": [
                12
            ],
            "slackProjectUpdateCreated": [
                12
            ],
            "slackProjectUpdateCreatedToTeam": [
                12
            ],
            "slackProjectUpdateCreatedToWorkspace": [
                12
            ],
            "slackInitiativeUpdateCreated": [
                12
            ],
            "slackIssueAddedToTriage": [
                12
            ],
            "slackIssueSlaHighRisk": [
                12
            ],
            "slackIssueSlaBreached": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationTemplatePayload": {
            "lastSyncId": [
                9
            ],
            "integrationTemplate": [
                353
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationTemplateCreateInput": {
            "id": [
                7
            ],
            "integrationId": [
                7
            ],
            "templateId": [
                7
            ],
            "foreignEntityId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationPayload": {
            "lastSyncId": [
                9
            ],
            "integration": [
                186
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationUpdateInput": {
            "settings": [
                574
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationSettingsInput": {
            "slack": [
                575
            ],
            "slackAsks": [
                576
            ],
            "slackPost": [
                579
            ],
            "slackProjectPost": [
                579
            ],
            "slackInitiativePost": [
                579
            ],
            "slackCustomViewNotifications": [
                579
            ],
            "slackOrgProjectUpdatesPost": [
                579
            ],
            "slackOrgInitiativeUpdatesPost": [
                579
            ],
            "googleSheets": [
                581
            ],
            "gitHub": [
                583
            ],
            "gitHubImport": [
                588
            ],
            "gitHubPersonal": [
                589
            ],
            "gitLab": [
                590
            ],
            "sentry": [
                591
            ],
            "zendesk": [
                592
            ],
            "intercom": [
                593
            ],
            "front": [
                594
            ],
            "jira": [
                595
            ],
            "notion": [
                598
            ],
            "opsgenie": [
                599
            ],
            "pagerDuty": [
                600
            ],
            "launchDarkly": [
                601
            ],
            "jiraPersonal": [
                602
            ],
            "salesforce": [
                603
            ],
            "__typename": [
                7
            ]
        },
        "SlackSettingsInput": {
            "teamName": [
                7
            ],
            "teamId": [
                7
            ],
            "enterpriseName": [
                7
            ],
            "enterpriseId": [
                7
            ],
            "shouldUnfurl": [
                12
            ],
            "linkOnIssueIdMention": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlackAsksSettingsInput": {
            "teamName": [
                7
            ],
            "teamId": [
                7
            ],
            "enterpriseName": [
                7
            ],
            "enterpriseId": [
                7
            ],
            "shouldUnfurl": [
                12
            ],
            "slackChannelMapping": [
                577
            ],
            "canAdministrate": [
                335
            ],
            "__typename": [
                7
            ]
        },
        "SlackChannelNameMappingInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "isPrivate": [
                12
            ],
            "isShared": [
                12
            ],
            "botAdded": [
                12
            ],
            "teams": [
                578
            ],
            "autoCreateOnMessage": [
                12
            ],
            "autoCreateOnEmoji": [
                12
            ],
            "autoCreateOnBotMention": [
                12
            ],
            "autoCreateTemplateId": [
                7
            ],
            "postCancellationUpdates": [
                12
            ],
            "postCompletionUpdates": [
                12
            ],
            "postAcceptedFromTriageUpdates": [
                12
            ],
            "aiTitles": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlackAsksTeamSettingsInput": {
            "id": [
                7
            ],
            "hasDefaultAsk": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlackPostSettingsInput": {
            "channel": [
                7
            ],
            "channelId": [
                7
            ],
            "configurationUrl": [
                7
            ],
            "teamId": [
                7
            ],
            "channelType": [
                580
            ],
            "__typename": [
                7
            ]
        },
        "SlackChannelType": {},
        "GoogleSheetsSettingsInput": {
            "spreadsheetId": [
                7
            ],
            "spreadsheetUrl": [
                7
            ],
            "sheetId": [
                9
            ],
            "updatedIssuesAt": [
                5
            ],
            "issue": [
                582
            ],
            "project": [
                582
            ],
            "__typename": [
                7
            ]
        },
        "GoogleSheetsExportSettings": {
            "enabled": [
                12
            ],
            "spreadsheetId": [
                7
            ],
            "spreadsheetUrl": [
                7
            ],
            "sheetId": [
                9
            ],
            "updatedAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "GitHubSettingsInput": {
            "pullRequestReviewTool": [
                584
            ],
            "orgAvatarUrl": [
                7
            ],
            "orgLogin": [
                7
            ],
            "repositories": [
                585
            ],
            "repositoriesMapping": [
                586
            ],
            "orgType": [
                587
            ],
            "__typename": [
                7
            ]
        },
        "PullRequestReviewTool": {},
        "GitHubRepoInput": {
            "id": [
                9
            ],
            "fullName": [
                7
            ],
            "archived": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GitHubRepoMappingInput": {
            "id": [
                7
            ],
            "linearTeamId": [
                7
            ],
            "gitHubRepoId": [
                9
            ],
            "gitHubLabels": [
                7
            ],
            "bidirectional": [
                12
            ],
            "default": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GithubOrgType": {},
        "GitHubImportSettingsInput": {
            "orgLogin": [
                7
            ],
            "orgAvatarUrl": [
                7
            ],
            "repositories": [
                585
            ],
            "labels": [
                18
            ],
            "orgType": [
                587
            ],
            "__typename": [
                7
            ]
        },
        "GitHubPersonalSettingsInput": {
            "login": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitLabSettingsInput": {
            "url": [
                7
            ],
            "readonly": [
                12
            ],
            "expiresAt": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "SentrySettingsInput": {
            "organizationSlug": [
                7
            ],
            "organizationId": [
                4
            ],
            "resolvingCompletesIssues": [
                12
            ],
            "unresolvingReopensIssues": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ZendeskSettingsInput": {
            "sendNoteOnStatusChange": [
                12
            ],
            "sendNoteOnComment": [
                12
            ],
            "automateTicketReopeningOnCompletion": [
                12
            ],
            "automateTicketReopeningOnCancellation": [
                12
            ],
            "automateTicketReopeningOnComment": [
                12
            ],
            "subdomain": [
                7
            ],
            "url": [
                7
            ],
            "botUserId": [
                7
            ],
            "canReadCustomers": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntercomSettingsInput": {
            "sendNoteOnStatusChange": [
                12
            ],
            "sendNoteOnComment": [
                12
            ],
            "automateTicketReopeningOnCompletion": [
                12
            ],
            "automateTicketReopeningOnCancellation": [
                12
            ],
            "automateTicketReopeningOnComment": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "FrontSettingsInput": {
            "sendNoteOnStatusChange": [
                12
            ],
            "sendNoteOnComment": [
                12
            ],
            "automateTicketReopeningOnCompletion": [
                12
            ],
            "automateTicketReopeningOnCancellation": [
                12
            ],
            "automateTicketReopeningOnComment": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "JiraSettingsInput": {
            "projectMapping": [
                596
            ],
            "projects": [
                597
            ],
            "isJiraServer": [
                12
            ],
            "setupPending": [
                12
            ],
            "manualSetup": [
                12
            ],
            "label": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "JiraLinearMappingInput": {
            "jiraProjectId": [
                7
            ],
            "linearTeamId": [
                7
            ],
            "bidirectional": [
                12
            ],
            "default": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "JiraProjectDataInput": {
            "id": [
                7
            ],
            "key": [
                7
            ],
            "name": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "NotionSettingsInput": {
            "workspaceId": [
                7
            ],
            "workspaceName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "OpsgenieInput": {
            "apiFailedWithUnauthorizedErrorAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "PagerDutyInput": {
            "apiFailedWithUnauthorizedErrorAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "LaunchDarklySettingsInput": {
            "projectKey": [
                7
            ],
            "environment": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "JiraPersonalSettingsInput": {
            "siteName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "SalesforceSettingsInput": {
            "sendNoteOnStatusChange": [
                12
            ],
            "sendNoteOnComment": [
                12
            ],
            "automateTicketReopeningOnCompletion": [
                12
            ],
            "automateTicketReopeningOnCancellation": [
                12
            ],
            "automateTicketReopeningOnComment": [
                12
            ],
            "subdomain": [
                7
            ],
            "url": [
                7
            ],
            "reopenCaseStatus": [
                7
            ],
            "restrictVisibility": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GitHubCommitIntegrationPayload": {
            "lastSyncId": [
                9
            ],
            "integration": [
                186
            ],
            "success": [
                12
            ],
            "webhookSecret": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitHubEnterpriseServerPayload": {
            "lastSyncId": [
                9
            ],
            "integration": [
                186
            ],
            "success": [
                12
            ],
            "setupUrl": [
                7
            ],
            "installUrl": [
                7
            ],
            "webhookSecret": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitLabIntegrationCreatePayload": {
            "lastSyncId": [
                9
            ],
            "integration": [
                186
            ],
            "success": [
                12
            ],
            "webhookSecret": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AirbyteConfigurationInput": {
            "apiKey": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "JiraConfigurationInput": {
            "accessToken": [
                7
            ],
            "email": [
                7
            ],
            "hostname": [
                7
            ],
            "manualSetup": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "JiraUpdateInput": {
            "id": [
                7
            ],
            "updateProjects": [
                12
            ],
            "updateMetadata": [
                12
            ],
            "deleteWebhook": [
                12
            ],
            "webhookSecret": [
                7
            ],
            "accessToken": [
                7
            ],
            "email": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationCustomerDataAttributesRefreshInput": {
            "service": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AsksChannelConnectPayload": {
            "lastSyncId": [
                9
            ],
            "integration": [
                186
            ],
            "success": [
                12
            ],
            "mapping": [
                612
            ],
            "addBot": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlackChannelNameMapping": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "isPrivate": [
                12
            ],
            "isShared": [
                12
            ],
            "botAdded": [
                12
            ],
            "teams": [
                613
            ],
            "autoCreateOnMessage": [
                12
            ],
            "autoCreateOnEmoji": [
                12
            ],
            "autoCreateOnBotMention": [
                12
            ],
            "autoCreateTemplateId": [
                7
            ],
            "postCancellationUpdates": [
                12
            ],
            "postCompletionUpdates": [
                12
            ],
            "postAcceptedFromTriageUpdates": [
                12
            ],
            "aiTitles": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlackAsksTeamSettings": {
            "id": [
                7
            ],
            "hasDefaultAsk": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "SlackChannelConnectPayload": {
            "lastSyncId": [
                9
            ],
            "integration": [
                186
            ],
            "success": [
                12
            ],
            "addBot": [
                12
            ],
            "nudgeToConnectMainSlackIntegration": [
                12
            ],
            "nudgeToUpdateMainSlackIntegration": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationRequestPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "IntegrationRequestInput": {
            "email": [
                7
            ],
            "name": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdatePayload": {
            "lastSyncId": [
                9
            ],
            "initiativeUpdate": [
                33
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateCreateInput": {
            "id": [
                7
            ],
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "health": [
                36
            ],
            "initiativeId": [
                7
            ],
            "isDiffHidden": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateUpdateInput": {
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "health": [
                36
            ],
            "isDiffHidden": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                33
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateReminderPayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeToProjectPayload": {
            "lastSyncId": [
                9
            ],
            "initiativeToProject": [
                361
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeToProjectCreateInput": {
            "id": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeToProjectUpdateInput": {
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "InitiativePayload": {
            "lastSyncId": [
                9
            ],
            "initiative": [
                34
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "ownerId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "color": [
                7
            ],
            "icon": [
                7
            ],
            "status": [
                35
            ],
            "targetDate": [
                17
            ],
            "targetDateResolution": [
                25
            ],
            "content": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "ownerId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "color": [
                7
            ],
            "icon": [
                7
            ],
            "targetDate": [
                17
            ],
            "status": [
                35
            ],
            "targetDateResolution": [
                25
            ],
            "trashed": [
                12
            ],
            "content": [
                7
            ],
            "updateReminderFrequencyInWeeks": [
                9
            ],
            "updateReminderFrequency": [
                9
            ],
            "frequencyResolution": [
                21
            ],
            "updateRemindersDay": [
                22
            ],
            "updateRemindersHour": [
                28
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                34
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeRelationPayload": {
            "lastSyncId": [
                9
            ],
            "initiativeRelation": [
                364
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeRelationCreateInput": {
            "id": [
                7
            ],
            "initiativeId": [
                7
            ],
            "relatedInitiativeId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "InitiativeRelationUpdateInput": {
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationTargetBranchPayload": {
            "lastSyncId": [
                9
            ],
            "targetBranch": [
                247
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationTargetBranchCreateInput": {
            "id": [
                7
            ],
            "teamId": [
                7
            ],
            "branchPattern": [
                7
            ],
            "isRegex": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationTargetBranchUpdateInput": {
            "branchPattern": [
                7
            ],
            "isRegex": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationStatePayload": {
            "lastSyncId": [
                9
            ],
            "gitAutomationState": [
                246
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationStateCreateInput": {
            "id": [
                7
            ],
            "teamId": [
                7
            ],
            "stateId": [
                7
            ],
            "targetBranchId": [
                7
            ],
            "event": [
                248
            ],
            "__typename": [
                7
            ]
        },
        "GitAutomationStateUpdateInput": {
            "stateId": [
                7
            ],
            "targetBranchId": [
                7
            ],
            "event": [
                248
            ],
            "__typename": [
                7
            ]
        },
        "UploadPayload": {
            "lastSyncId": [
                9
            ],
            "uploadFile": [
                639
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "UploadFile": {
            "filename": [
                7
            ],
            "contentType": [
                7
            ],
            "size": [
                28
            ],
            "uploadUrl": [
                7
            ],
            "assetUrl": [
                7
            ],
            "metaData": [
                18
            ],
            "headers": [
                640
            ],
            "__typename": [
                7
            ]
        },
        "UploadFileHeader": {
            "key": [
                7
            ],
            "value": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ImageUploadFromUrlPayload": {
            "lastSyncId": [
                9
            ],
            "url": [
                7
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "FavoritePayload": {
            "lastSyncId": [
                9
            ],
            "favorite": [
                143
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "FavoriteCreateInput": {
            "id": [
                7
            ],
            "folderName": [
                7
            ],
            "parentId": [
                7
            ],
            "issueId": [
                7
            ],
            "facetId": [
                7
            ],
            "projectId": [
                7
            ],
            "projectTab": [
                144
            ],
            "predefinedViewType": [
                7
            ],
            "predefinedViewTeamId": [
                7
            ],
            "cycleId": [
                7
            ],
            "customViewId": [
                7
            ],
            "documentId": [
                7
            ],
            "roadmapId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "initiativeTab": [
                145
            ],
            "labelId": [
                7
            ],
            "projectLabelId": [
                7
            ],
            "userId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "customerId": [
                7
            ],
            "dashboardId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "FavoriteUpdateInput": {
            "sortOrder": [
                9
            ],
            "parentId": [
                7
            ],
            "folderName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EntityExternalLinkPayload": {
            "lastSyncId": [
                9
            ],
            "entityExternalLink": [
                121
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EntityExternalLinkCreateInput": {
            "id": [
                7
            ],
            "url": [
                7
            ],
            "label": [
                7
            ],
            "initiativeId": [
                7
            ],
            "projectId": [
                7
            ],
            "teamId": [
                7
            ],
            "resourceFolderId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "EntityExternalLinkUpdateInput": {
            "url": [
                7
            ],
            "label": [
                7
            ],
            "sortOrder": [
                9
            ],
            "resourceFolderId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EmojiPayload": {
            "lastSyncId": [
                9
            ],
            "emoji": [
                369
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EmojiCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "url": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EmailUnsubscribePayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EmailUnsubscribeInput": {
            "type": [
                7
            ],
            "token": [
                7
            ],
            "userId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EmailIntakeAddressPayload": {
            "lastSyncId": [
                9
            ],
            "emailIntakeAddress": [
                653
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EmailIntakeAddress": {
            "id": [
                4
            ],
            "createdAt": [
                5
            ],
            "updatedAt": [
                5
            ],
            "archivedAt": [
                5
            ],
            "address": [
                7
            ],
            "enabled": [
                12
            ],
            "repliesEnabled": [
                12
            ],
            "template": [
                26
            ],
            "team": [
                11
            ],
            "organization": [
                8
            ],
            "creator": [
                6
            ],
            "customerRequestsEnabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EmailIntakeAddressCreateInput": {
            "id": [
                7
            ],
            "teamId": [
                7
            ],
            "templateId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EmailIntakeAddressUpdateInput": {
            "enabled": [
                12
            ],
            "repliesEnabled": [
                12
            ],
            "customerRequestsEnabled": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "DocumentPayload": {
            "lastSyncId": [
                9
            ],
            "document": [
                176
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "DocumentCreateInput": {
            "id": [
                7
            ],
            "title": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "content": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "teamId": [
                7
            ],
            "resourceFolderId": [
                7
            ],
            "lastAppliedTemplateId": [
                7
            ],
            "sortOrder": [
                9
            ],
            "subscriberIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "DocumentUpdateInput": {
            "title": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "content": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "teamId": [
                7
            ],
            "resourceFolderId": [
                7
            ],
            "lastAppliedTemplateId": [
                7
            ],
            "hiddenAt": [
                5
            ],
            "sortOrder": [
                9
            ],
            "trashed": [
                12
            ],
            "subscriberIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "DocumentArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                176
            ],
            "__typename": [
                7
            ]
        },
        "CyclePayload": {
            "lastSyncId": [
                9
            ],
            "cycle": [
                148
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CycleCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "teamId": [
                7
            ],
            "startsAt": [
                5
            ],
            "endsAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "CycleUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "startsAt": [
                5
            ],
            "endsAt": [
                5
            ],
            "completedAt": [
                5
            ],
            "__typename": [
                7
            ]
        },
        "CycleArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                148
            ],
            "__typename": [
                7
            ]
        },
        "CycleShiftAllInput": {
            "id": [
                7
            ],
            "daysToShift": [
                9
            ],
            "__typename": [
                7
            ]
        },
        "CustomerTierPayload": {
            "lastSyncId": [
                9
            ],
            "tier": [
                185
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CustomerTierCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerTierUpdateInput": {
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusPayload": {
            "lastSyncId": [
                9
            ],
            "status": [
                183
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerStatusUpdateInput": {
            "name": [
                7
            ],
            "color": [
                7
            ],
            "description": [
                7
            ],
            "position": [
                9
            ],
            "displayName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerPayload": {
            "lastSyncId": [
                9
            ],
            "customer": [
                182
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CustomerCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "domains": [
                7
            ],
            "externalIds": [
                7
            ],
            "slackChannelId": [
                7
            ],
            "ownerId": [
                7
            ],
            "statusId": [
                7
            ],
            "revenue": [
                28
            ],
            "size": [
                28
            ],
            "tierId": [
                7
            ],
            "logoUrl": [
                7
            ],
            "mainSourceId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerUpdateInput": {
            "name": [
                7
            ],
            "domains": [
                7
            ],
            "externalIds": [
                7
            ],
            "slackChannelId": [
                7
            ],
            "ownerId": [
                7
            ],
            "statusId": [
                7
            ],
            "revenue": [
                28
            ],
            "size": [
                28
            ],
            "tierId": [
                7
            ],
            "logoUrl": [
                7
            ],
            "mainSourceId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerUpsertInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "domains": [
                7
            ],
            "externalId": [
                7
            ],
            "slackChannelId": [
                7
            ],
            "ownerId": [
                7
            ],
            "statusId": [
                7
            ],
            "revenue": [
                28
            ],
            "size": [
                28
            ],
            "tierId": [
                7
            ],
            "logoUrl": [
                7
            ],
            "tierName": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedPayload": {
            "lastSyncId": [
                9
            ],
            "need": [
                210
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedCreateInput": {
            "id": [
                7
            ],
            "customerId": [
                7
            ],
            "customerExternalId": [
                7
            ],
            "issueId": [
                7
            ],
            "projectId": [
                7
            ],
            "commentId": [
                7
            ],
            "attachmentId": [
                7
            ],
            "priority": [
                9
            ],
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "attachmentUrl": [
                7
            ],
            "createAsUser": [
                7
            ],
            "displayIconUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedCreateFromAttachmentInput": {
            "attachmentId": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedUpdatePayload": {
            "lastSyncId": [
                9
            ],
            "need": [
                210
            ],
            "success": [
                12
            ],
            "updatedRelatedNeeds": [
                210
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedUpdateInput": {
            "id": [
                7
            ],
            "customerId": [
                7
            ],
            "customerExternalId": [
                7
            ],
            "issueId": [
                7
            ],
            "projectId": [
                7
            ],
            "priority": [
                9
            ],
            "applyPriorityToRelatedNeeds": [
                12
            ],
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "attachmentUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CustomerNeedArchivePayload": {
            "lastSyncId": [
                9
            ],
            "success": [
                12
            ],
            "entity": [
                210
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewPayload": {
            "lastSyncId": [
                9
            ],
            "customView": [
                149
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewCreateInput": {
            "id": [
                7
            ],
            "name": [
                7
            ],
            "description": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "teamId": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "ownerId": [
                7
            ],
            "filterData": [
                107
            ],
            "projectFilterData": [
                40
            ],
            "feedItemFilterData": [
                683
            ],
            "shared": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "FeedItemFilter": {
            "id": [
                41
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "author": [
                68
            ],
            "updateType": [
                44
            ],
            "updateHealth": [
                44
            ],
            "projectUpdate": [
                325
            ],
            "relatedInitiatives": [
                79
            ],
            "relatedTeams": [
                90
            ],
            "and": [
                683
            ],
            "or": [
                683
            ],
            "__typename": [
                7
            ]
        },
        "CustomViewUpdateInput": {
            "name": [
                7
            ],
            "description": [
                7
            ],
            "icon": [
                7
            ],
            "color": [
                7
            ],
            "teamId": [
                7
            ],
            "projectId": [
                7
            ],
            "initiativeId": [
                7
            ],
            "ownerId": [
                7
            ],
            "filterData": [
                107
            ],
            "projectFilterData": [
                40
            ],
            "feedItemFilterData": [
                683
            ],
            "shared": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ContactPayload": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ContactCreateInput": {
            "type": [
                7
            ],
            "message": [
                7
            ],
            "operatingSystem": [
                7
            ],
            "browser": [
                7
            ],
            "device": [
                7
            ],
            "clientVersion": [
                7
            ],
            "disappointmentRating": [
                28
            ],
            "__typename": [
                7
            ]
        },
        "ContactSalesCreateInput": {
            "name": [
                7
            ],
            "email": [
                7
            ],
            "companySize": [
                7
            ],
            "message": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CommentPayload": {
            "lastSyncId": [
                9
            ],
            "comment": [
                32
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "CommentCreateInput": {
            "id": [
                7
            ],
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "issueId": [
                7
            ],
            "projectUpdateId": [
                7
            ],
            "initiativeUpdateId": [
                7
            ],
            "postId": [
                7
            ],
            "documentContentId": [
                7
            ],
            "parentId": [
                7
            ],
            "createAsUser": [
                7
            ],
            "displayIconUrl": [
                7
            ],
            "createdAt": [
                5
            ],
            "doNotSubscribeToIssue": [
                12
            ],
            "createOnSyncedSlackThread": [
                12
            ],
            "quotedText": [
                7
            ],
            "subscriberIds": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CommentUpdateInput": {
            "body": [
                7
            ],
            "bodyData": [
                27
            ],
            "resolvingUserId": [
                7
            ],
            "resolvingCommentId": [
                7
            ],
            "quotedText": [
                7
            ],
            "subscriberIds": [
                7
            ],
            "doNotSubscribeToIssue": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "EmailUserAccountAuthChallengeResponse": {
            "success": [
                12
            ],
            "authType": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "EmailUserAccountAuthChallengeInput": {
            "email": [
                7
            ],
            "isDesktop": [
                12
            ],
            "clientAuthCode": [
                7
            ],
            "inviteLink": [
                7
            ],
            "loginCodeOnly": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "TokenUserAccountAuthInput": {
            "email": [
                7
            ],
            "token": [
                7
            ],
            "timezone": [
                7
            ],
            "inviteLink": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GoogleUserAccountAuthInput": {
            "code": [
                7
            ],
            "redirectUri": [
                7
            ],
            "timezone": [
                7
            ],
            "inviteLink": [
                7
            ],
            "disallowSignup": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "PasskeyLoginStartResponse": {
            "success": [
                12
            ],
            "options": [
                18
            ],
            "__typename": [
                7
            ]
        },
        "CreateOrJoinOrganizationResponse": {
            "organization": [
                396
            ],
            "user": [
                395
            ],
            "__typename": [
                7
            ]
        },
        "OnboardingCustomerSurvey": {
            "companyRole": [
                7
            ],
            "companySize": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "CreateOrganizationInput": {
            "name": [
                7
            ],
            "urlKey": [
                7
            ],
            "domainAccess": [
                12
            ],
            "timezone": [
                7
            ],
            "utm": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "JoinOrganizationInput": {
            "organizationId": [
                7
            ],
            "inviteLink": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "LogoutResponse": {
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentPayload": {
            "lastSyncId": [
                9
            ],
            "attachment": [
                211
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentCreateInput": {
            "id": [
                7
            ],
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "url": [
                7
            ],
            "issueId": [
                7
            ],
            "iconUrl": [
                7
            ],
            "metadata": [
                18
            ],
            "groupBySource": [
                12
            ],
            "commentBody": [
                7
            ],
            "commentBodyData": [
                18
            ],
            "createAsUser": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AttachmentUpdateInput": {
            "title": [
                7
            ],
            "subtitle": [
                7
            ],
            "metadata": [
                18
            ],
            "iconUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "GitLinkKind": {},
        "FrontAttachmentPayload": {
            "lastSyncId": [
                9
            ],
            "attachment": [
                211
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ApiKeyPayload": {
            "lastSyncId": [
                9
            ],
            "apiKey": [
                417
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "ApiKeyCreateInput": {
            "id": [
                7
            ],
            "label": [
                7
            ],
            "key": [
                7
            ],
            "teamIds": [
                7
            ],
            "scope": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "ApiKeyUpdateInput": {
            "label": [
                7
            ],
            "teamIds": [
                7
            ],
            "scope": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentContextPayload": {
            "lastSyncId": [
                9
            ],
            "agentContext": [
                420
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "AgentContextCreateInput": {
            "id": [
                7
            ],
            "commentId": [
                7
            ],
            "type": [
                422
            ],
            "creatorId": [
                7
            ],
            "sourceUrl": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentContextUpdateInput": {
            "status": [
                421
            ],
            "summary": [
                7
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityPayload": {
            "lastSyncId": [
                9
            ],
            "agentActivity": [
                423
            ],
            "success": [
                12
            ],
            "__typename": [
                7
            ]
        },
        "AgentActivityCreateInput": {
            "id": [
                7
            ],
            "agentContextId": [
                7
            ],
            "type": [
                424
            ],
            "content": [
                18
            ],
            "__typename": [
                7
            ]
        }
    }
}