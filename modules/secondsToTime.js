module.exports = function s(secs) {
    var secs = secs/1000
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var days = Math.floor(hours / 24)
    while (hours > 23) {
        hours = hours - 24
    }
    switch(seconds) {
    	case 0:
    		seconds = '00';
    		break;
    	case 1:
    		seconds = '01';
    		break;
    	case 2:
    		seconds = '02';
    		break;
    	case 3:
    		seconds = '03';
    		break;
    	case 4:
    		seconds = '04';
    		break;
    	case 5:
    		seconds = '05';
    		break;
    	case 6:
    		seconds = '06';
    		break;
    	case 7:
    		seconds = '07';
    		break;
    	case 8:
    		seconds = '08';
    		break;
    	case 9:
    		seconds = '09';
    		break;
    }
    switch(minutes) {
    	case 0:
    		minutes = '00';
    		break;
    	case 1:
    		minutes = '01';
    		break;
    	case 2:
    		minutes = '02';
    		break;
    	case 3:
    		minutes = '03';
    		break;
    	case 4:
    		minutes = '04';
    		break;
    	case 5:
    		minutes = '05';
    		break;
    	case 6:
    		minutes = '06';
    		break;
    	case 7:
    		minutes = '07';
    		break;
    	case 8:
    		minutes = '08';
    		break;
    	case 9:
    		minutes = '09';
    		break;
    }
    var obj = {
        "d": days,
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}