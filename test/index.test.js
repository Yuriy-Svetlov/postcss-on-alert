
const alert = require('./../lib/alert.js');

const 
	dataAlert = {
		result: {
			messages: [
				{ 
					type: 'warning',  
					text: '111', 
					plugin: 'test_plugin_1'
				},
				{ 
					type: 'warning',  
					text: '222', 
					plugin: 'test_plugin_2'
				},
				{ 
					type: 'error',  
					text: '333', 
					plugin: 'test_plugin_3'
				}															
			],
			warnings: function(){
				return dataAlert.result.messages;
			}						
		}
	};


test('data processing test without filtering', done => {
	function callback(messages) {
		try {
			expect(messages.length).toBe(3);
		    done();

		} catch (error) {
		    done(error);
		}
	}

	alert({
		filterPlugins: [],
		filterTypeErrors: [],
		filterMessages: [],
		onAlert: function(messages){
			callback(messages);
		}		
	}).OnceExit('root', dataAlert);
});


test('plugin filter test', done => {
	function callback(messages) {
		try {
		    expect(messages.length).toBe(1);
		    done();

		} catch (error) {
		    done(error);
		}
	}

	alert({
		filterPlugins: ['test_plugin_1', 'test_plugin_2'],
		filterTypeErrors: [],
		filterMessages: [],
		onAlert: function(messages){
			callback(messages);
		}		
	}).OnceExit('root', dataAlert);
});


test('error type filter test', done => {
	function callback(messages) {
		try {
		    expect(messages.length).toBe(1);
		    done();

		} catch (error) {
		    done(error);
		}
	}

	alert({
		filterPlugins: [],
		filterTypeErrors: ['warning'],
		filterMessages: [],
		onAlert: function(messages){
			callback(messages);
		}		
	}).OnceExit('root', dataAlert);
});


test('message filter test', done => {
	function callback(messages) {
		try {
		    expect(messages.length).toBe(2);
		    done();

		} catch (error) {
		    done(error);
		}
	}

	alert({
		filterPlugins: [],
		filterTypeErrors: [],
		filterMessages: ['333'],
		onAlert: function(messages){
			callback(messages);
		}		
	}).OnceExit('root', dataAlert);
});