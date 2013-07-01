"use strict";

goog.provide('ClientDetectorTest');

// see: http://www.useragentstring.com/
TestCase("ClientDetectorTest", {
	
	setUp: function() {
		swfobject =  {
			getFlashPlayerVersion: function() {
				return {major: 8 };
			}
		};
	},
	
	"test detect chrome windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/24.0.1295.0 Safari/537.15");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_CHROME, info.getBrowserType());
		assertEquals(24, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_SUPPORTED, info.getSupportedType());
		
	},
	"test detect firefox linux": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:17.0) Gecko/17.0 Firefox/17.0");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_FIREFOX, info.getBrowserType());
		assertEquals(17, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_LINUX, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_SUPPORTED, info.getSupportedType());
	},
	"test detect safari ipad": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_SAFARI, info.getBrowserType());
		assertEquals(6, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_MAC, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_IPAD, info.getDeviceType());
		assertEquals(true, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_SUPPORTED, info.getSupportedType());
	},
	"test detect ie windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_IE, info.getBrowserType());
		assertEquals(10, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_SUPPORTED, info.getSupportedType());
	},
	"test detect old ie9 windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_IE, info.getBrowserType());
		assertEquals(9, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_LEGACY, info.getSupportedType());
	},
	"test detect old ie9 in IE8 mode windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_IE, info.getBrowserType());
		assertEquals(8, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_LEGACY, info.getSupportedType());
	},
	"test detect old IE8 mode windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_IE, info.getBrowserType());
		assertEquals(8, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_LEGACY, info.getSupportedType());
	},
	"test detect old ie7 windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Mozilla/4.0(compatible; MSIE 7.0b; Windows NT 6.0)");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_IE, info.getBrowserType());
		assertEquals(7, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_UPDATE_NEEDED, info.getSupportedType());
	},
	"test detect opera windows": function() {
		var info = tutao.tutanota.util.ClientDetector;
		info._setClientInfo("Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.11");
		assertEquals(tutao.tutanota.util.ClientDetector.BROWSER_TYPE_OTHER, info.getBrowserType());
		assertEquals(0, info.getBrowserVersion());
		assertEquals(tutao.tutanota.util.ClientDetector.OS_TYPE_WINDOWS, info.getOs());
		assertEquals(tutao.tutanota.util.ClientDetector.DEVICE_TYPE_OTHER, info.getDeviceType());
		assertEquals(false, info.isTouchSupported());
		assertEquals(false, info.isPhoneSupported());
		assertEquals(tutao.tutanota.util.ClientDetector.SUPPORTED_TYPE_UNKNOWN, info.getSupportedType());
	}
});