from typing import Optional, List, Any


class Creator:
    id: str
    username: str
    color: str
    email: str
    profile_picture: str

    def __init__(self, id: str, username: str, color: str, email: str, profile_picture: str) -> None:
        self.id = id
        self.username = username
        self.color = color
        self.email = email
        self.profile_picture = profile_picture


class Folder:
    id: str
    name: str
    hidden: Optional[str]
    access: str

    def __init__(self, id: str, name: str, hidden: Optional[str], access: str) -> None:
        self.id = id
        self.name = name
        self.hidden = hidden
        self.access = access


class Space:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id


class Status:
    status: str
    color: str
    type: str
    orderindex: str

    def __init__(self, status: str, color: str, type: str, orderindex: str) -> None:
        self.status = status
        self.color = color
        self.type = type
        self.orderindex = orderindex


class Properties:
    id: str
    custom_id: str
    name: str
    text_content: str
    description: str
    status: Status
    orderindex: str
    date_created: str
    date_updated: str
    date_closed: str
    archived: str
    creator: Creator
    assignees: List[Any]
    watchers: List[Any]
    checklists: List[Any]
    tags: List[Any]
    parent: str
    priority: str
    due_date: str
    start_date: str
    points: str
    time_estimate: str
    custom_fields: List[Any]
    dependencies: List[Any]
    linked_tasks: List[Any]
    team_id: str
    url: str
    permission_level: str
    list: Folder
    project: Folder
    folder: Folder
    space: Space

    def __init__(self, id: str, custom_id: str, name: str, text_content: str, description: str, status: Status, orderindex: str, date_created: str, date_updated: str, date_closed: str, archived: str, creator: Creator, assignees: List[Any], watchers: List[Any], checklists: List[Any], tags: List[Any], parent: str, priority: str, due_date: str, start_date: str, points: str, time_estimate: str, custom_fields: List[Any], dependencies: List[Any], linked_tasks: List[Any], team_id: str, url: str, permission_level: str, list: Folder, project: Folder, folder: Folder, space: Space) -> None:
        self.id = id
        self.custom_id = custom_id
        self.name = name
        self.text_content = text_content
        self.description = description
        self.status = status
        self.orderindex = orderindex
        self.date_created = date_created
        self.date_updated = date_updated
        self.date_closed = date_closed
        self.archived = archived
        self.creator = creator
        self.assignees = assignees
        self.watchers = watchers
        self.checklists = checklists
        self.tags = tags
        self.parent = parent
        self.priority = priority
        self.due_date = due_date
        self.start_date = start_date
        self.points = points
        self.time_estimate = time_estimate
        self.custom_fields = custom_fields
        self.dependencies = dependencies
        self.linked_tasks = linked_tasks
        self.team_id = team_id
        self.url = url
        self.permission_level = permission_level
        self.list = list
        self.project = project
        self.folder = folder
        self.space = space


class Welcome5:
    properties: Properties

    def __init__(self, properties: Properties) -> None:
        self.properties = properties
