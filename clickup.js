{
  properties: {
    id: "integer",
    custom_id: "integer",
    name: "integer",
    text_content: "string",
    description: "string",
    status: {
      status: "string",
      color: "string",
      type: "string",
      orderindex: "integer"
    },
    orderindex: "string",
    date_created: "date",
    date_updated: "date",
    date_closed: "date",
    archived: "string",
    creator: {
      id: "integer",
      username: "string",
      color: "string",
      email: "string",
      profilePicture: "string"
    },
    assignees: [],
    watchers: [],
    checklists: [],
    tags: [],
    parent: "integer",
    priority: "string",
    due_date: "date",
    start_date: "date",
    points: "integer",
    time_estimate: "integer",
    custom_fields: [],
    dependencies: [],
    linked_tasks: [],
    team_id: "integer",
    url: "string",
    permission_level: "string",
    list: {
      id: "integer",
      name: "string",
      access: "boolean"
    },
    project: {
      id: "string",
      name: "string",
      hidden: "boolean",
      access: "boolean"
    },
    folder: {
      id: "integer",
      name: "string",
      hidden: "boolean",
      access: "boolean"
    },
    space: {
      id: "integer"
    }
  }
}