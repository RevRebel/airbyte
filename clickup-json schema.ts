{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "properties": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "custom_id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "text_content": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "status": {
          "type": "object",
          "properties": {
            "status": {
              "type": "string"
            },
            "color": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "orderindex": {
              "type": "string"
            }
          },
          "required": [
            "status",
            "color",
            "type",
            "orderindex"
          ]
        },
        "orderindex": {
          "type": "string"
        },
        "date_created": {
          "type": "string"
        },
        "date_updated": {
          "type": "string"
        },
        "date_closed": {
          "type": "string"
        },
        "archived": {
          "type": "string"
        },
        "creator": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "color": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilePicture": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "username",
            "color",
            "email",
            "profilePicture"
          ]
        },
        "assignees": {
          "type": "array",
          "items": {}
        },
        "watchers": {
          "type": "array",
          "items": {}
        },
        "checklists": {
          "type": "array",
          "items": {}
        },
        "tags": {
          "type": "array",
          "items": {}
        },
        "parent": {
          "type": "string"
        },
        "priority": {
          "type": "string"
        },
        "due_date": {
          "type": "string"
        },
        "start_date": {
          "type": "string"
        },
        "points": {
          "type": "string"
        },
        "time_estimate": {
          "type": "string"
        },
        "custom_fields": {
          "type": "array",
          "items": {}
        },
        "dependencies": {
          "type": "array",
          "items": {}
        },
        "linked_tasks": {
          "type": "array",
          "items": {}
        },
        "team_id": {
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "permission_level": {
          "type": "string"
        },
        "list": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "access": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "access"
          ]
        },
        "project": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "hidden": {
              "type": "string"
            },
            "access": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "hidden",
            "access"
          ]
        },
        "folder": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "hidden": {
              "type": "string"
            },
            "access": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "hidden",
            "access"
          ]
        },
        "space": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            }
          },
          "required": [
            "id"
          ]
        }
      },
      "required": [
        "id",
        "custom_id",
        "name",
        "text_content",
        "description",
        "status",
        "orderindex",
        "date_created",
        "date_updated",
        "date_closed",
        "archived",
        "creator",
        "assignees",
        "watchers",
        "checklists",
        "tags",
        "parent",
        "priority",
        "due_date",
        "start_date",
        "points",
        "time_estimate",
        "custom_fields",
        "dependencies",
        "linked_tasks",
        "team_id",
        "url",
        "permission_level",
        "list",
        "project",
        "folder",
        "space"
      ]
    }
  },
  "required": [
    "properties"
  ]
}