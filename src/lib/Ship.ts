export interface IShipMapRoomDoor = {
  x: number;
  y: number;
}

export interface IShipMapRoom = {
  x: number;
  y: number;
  x2: number;
  y2: number;
}

export interface IShipMap = {
  engineering: IShipMapRoom;
  bridge: IShipMapRoom;
  storage: IShipMapRoom;
  drone: IShipMapRoom;
  shop: IShipMapRoom;
  airlock: IShipMapRoom;
  // otherRooms: IShipMapRoom[];
  doors: IShipMapRoomDoor[]
}

export interface IShip = {
  name: string;
  map: IShipMap;
}
