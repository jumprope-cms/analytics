'use strict';

import os from 'os';

// Export all the environment vars
const config = {};
config.env = process.env.NODE_ENV || 'dev';

// Set up network config
config.network = {};
config.network.targetPort     = process.env.EVENT_BUS_SERVICE_PORT || 7000;
config.network.targetHost     = process.env.EVENT_BUS_SERVICE_HOST || 'localhost';
config.network.subscriberPort = process.env.SUBSCRIBER_PORT || 5005;

// Set myIp based on environment
switch (config.env) {
	case 'testing':
		config.network.myIp = os.networkInterfaces().eth0[0].address;
		break;
	case 'staging':
		config.network.myIp = os.networkInterfaces().eth0[0].address;
		break;
	case 'production':
		config.network.myIp = os.networkInterfaces().eth0[0].address;
		break;
	default:
		config.network.myIp = '127.0.0.1';

}

export default config;
