// each moves the drones forward a minimum amount
export const DRONE_MOVE_FORWARD = "DRONE_MOVE_FORWARD"
export const DRONE_MOVE_BACK = "DRONE_MOVE_BACK"
export const DRONE_ROTATE_LEFT = "DRONE_ROTATE_LEFT"
export const DRONE_ROTATE_RIGHT = "DRONE_ROTATE_RIGHT"

// builds a list of commands to execute over time.
export const DRONE_QUEUE = "DRONE_QUEUE"
export const LOGIN = "LOGIN"

// show the available scripts in the log
export const SHOW_SCRIPTS = "SHOW_SCRIPTS";

export const ADD_DRONE = "ADD_DRONE";
export const ADD_SHIP = "ADD_SHIP";
export const ADD_UPGRADE = "ADD_UPGRADE";
export const MOVE_CAMERA = "MOVE_CAMERA"
export const NEW_COMMAND = "NEW_COMMAND"
export const SET_BOARDED_SHIP = "SET_BOARDED_SHIP";
export const SET_CURRENT_SHIP = "SET_CURRENT_SHIP";
export const SET_VIDEO = "SET_VIDEO";
export const TELEPORT = "TELEPORT"
export const SET_EDITING_SHIP = "SET_EDITING_SHIP";
export const SET_EDITING_FILE = "SET_EDITING_FILE";
export const SET_SCHEMA_CURSOR = "SET_SCHEMA_CURSOR";
export const SET_COMMAND_WARNING  = "SET_COMMAND_WARNING";
export const SET_COMMAND_LINE_FOCUS = "SET_COMMAND_LINE_FOCUS"

export const CRT = "CRT"
export const THEME = "THEME"

export const USER_TYPES = [
  SET_VIDEO, DRONE_ROTATE_RIGHT, DRONE_MOVE_BACK, DRONE_MOVE_FORWARD, DRONE_ROTATE_LEFT
]
