const IOClient = require('socket.io-client');
const {ApiTransportClient} = require('@niobium/api-transport');

class ApiWeb extends ApiTransportClient {
	constructor(address = undefined, ioOptions = {}) {
		const ioClient = IOClient(address, ioOptions);
		super(ioClient);

		this.ioClient = ioClient;
	}
}

module.exports = {ApiWeb, ApiTransportClient, IOClient};
