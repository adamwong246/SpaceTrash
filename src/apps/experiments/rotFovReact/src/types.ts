import { Interpreter } from "xstate";

export const MENU_ABOUT = 'MENU_ABOUT'
export const MENU_DRONE = 'MENU_DRONE';

export interface IPlugin {
  uid: any
  name: string

  xstate?: any
  promiseMachine?: Interpreter<any>
  promiseState: any
  

}

export interface IDrone {
  name: string
  // promiseMachine?: Interpreter<any>
  // promiseState: any
  r: number;
  triangles: any[]
  uid: any
  x: number
  // xstate: any
  y: number

  plugins: IPlugin[]
}

export interface IState {
  cameraDistance: number
  cameraLightsIntersectionPolygon: boolean
  camerarays: boolean
  clock: number;
  droneIconHighlighted: string
  droneIconSelected: string
  drones: IDrone[]
  fudge: number
  height: number
  knownMap: any
  lightDistance: number
  lightrays: boolean
  lightSource: { x: number, y: number }
  lightsPolygons: boolean
  menuOpen: typeof MENU_ABOUT | typeof MENU_DRONE
  menuOpenToDrone: null | string
  mouseX: number
  mouseY: number
  preloadedMap: any
  showLiveMap: boolean
  showWallSegments: boolean
  visibility: any[]
  visibleMap: any[]
  width: number
};
