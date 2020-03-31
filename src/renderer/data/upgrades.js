export default   [
  {
    id: 0, name: "GENERATOR", description: "charge a power port"
  },

  {
    id: 3, name: "INTERFACE", description: "connect to a ships terminal"
  },

  {
    id: 4, name: "PRY", description: "force open a closed door, which will can no longer can closed without WELD."
  },
  {
    id: 5, name: "WELD", description: "weld a closed door shut, which will no longer be able to be opened without PRY."
  },


  {
    id: 6, name: "TOW", description: "tow a disabled DRONE or a chest."
  },

  {
    id: 7, name: "SNEAK", description: "Makes DRONE invisible to SOUND but more visible to HEAT"
  },
  {
    id: 8, name: "CLOAK", description: "Make DRONE invisble to MOTION but more visible to SOUND"
  },
  {
    id: 9, name: "INSULATE", description: "Make DRONE invisble to HEAT but more visible to MOTION"
  },

  {
    id: 10, name: "EXPLOSION_ATTACK",
    description: "attack with EXPLOSION. Has a narrow angle of attack but long range. Causes the DRONE to emit SOUND."
  },
  {
    id: 11, name: "EMP_ATTACK",
    description: "attack with EMP. Has 360 angle of a attack but short range. Causes DRONE to emit HEAT"
  },
  {
    id: 12, name: "RADIATION_ATTACK",
    description: "attack with RADIATION. Has medium angle of attack and medium range. Causes DRONE to emit MOTION."
  },
  {
    id: 13, name: "FORCEFIELD",
    description: "Increase defense, at the cost of increased HEAT, MOTION and SOUND"
  },
  {
    id: 14, name: "SPEED",
    description: "Increase speed, at the cost of increased HEAT, MOTION and SOUND"
  },

  {
    id: 15, name: "EXPLOSION_SHIELD",
    description: "defend from EXPLOSION. Causes the DRONE to emit SOUND."
  },
  {
    id: 16, name: "EMP_SHIELD",
    description: "defend from EMP. Causes DRONE to emit HEAT"
  },
  {
    id: 17, name: "RADIATION_SHIELD",
    description: "defend from RADIATION. Causes DRONE to emit MOTION."
  },

  {
    id: 18, name: "INFRA_SCOPE", description: "Detects HEAT signatures"
  },
  {
    id: 19, name: "SONAR_SCOPE", description: "Detects SOUND signatures"
  },
  {
    id: 20, name: "MOTION_SCOPE", description: "Detects MOTION signatures"
  },

  {
    id: 21, name: "SYNC", description: "Allows 2 drones to share files. Can be used to download BLACKBOX files wirelessly"
  },

]
