/**
 * Created by clovis on 27/08/17.
 */
let Config = 
{
	MassGround:0.3,
	MassIce:0.9,
	
    PlayerSpeed  : 20,
    PlayerMaxSpeed : 30,

    TileSize  : 32,

    MapRooms : 3,

    MapWith : 0,
    MapHeight : 0,
	
	MapSize:11,
	NormMagnet:2,
    zoneMagnet:4,
    
    LavaBurnBuff : 100, 
	
    NormBumper:100,
    BumperBuff : 500,
    MassBumper: 0.7,
    
    SpikeFriendly: 2000,
    SpikeDeadly : 500,

    BowDeadly : 3000,
    ArrowSpeed : 50,

    MineBuff : 1000,
}

Config.MapWidth = Config.MapRooms*Config.MapSize;
Config.MapHeight = Config.MapRooms*Config.MapSize;