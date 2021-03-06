// ==UserScript==
// @name           AutoBCC for Outolook Web Access
// @namespace      marcoratto
// @description    Add automatically an email address to the BCC.
// @version        0.2
// @date           2010-01-07
// @license        GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @include        * CHANGE TO YOUR OWA SERVER ADDRESS *
// ==/UserScript==

// Change this to the number given to the script by userscripts.org (check the address bar)

const SUC_script_num = 65871;

var log4GM = {

    

	 // Only for this class

    INTERNAL : 6,



	 // Severe errors that cause premature termination. Expect these to be immediately visible on a status console.     

    FATAL : 5,

    

	 // Other runtime errors or unexpected conditions. Expect these to be immediately visible on a status console.

    ERROR : 4,

    

	 // Use of deprecated APIs, poor use of API, 'almost' errors, other runtime situations that are undesirable or unexpected, but not necessarily "wrong". Expect these to be immediately visible on a status console.     

    WARN : 3,

    

	 // Interesting runtime events (startup/shutdown). Expect these to be immediately visible on a console, so be conservative and keep to a minimum.

    INFO : 2,



    // Detailed information on flow of through the system. Expect these to be written to logs only.    

    DEBUG : 1,



    // Detailed information on flow of through the system. Expect these to be written to logs only.     

    TRACE : 0,

	 	 	 

    LEVEL_NAMES : new Array("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "INTERNAL"),

	 	 

	 loggingLevel : this.TRACE, 

	 

	 log : function (level, message) {

	   if (level < this.TRACE || level > this.INTERNAL) {

         alert("Logging level must be between TRACE(" + this.DEBUG + ") and FATAL(" + this.FATAL + ")");

      }

      if ((level < this.loggingLevel) && (level != this.INTERNAL)) {

            return;

      }

	   if (typeof GM_log == 'function') {

		   GM_log(this.LEVEL_NAMES[this.loggingLevel] + "-" + message); 

	   } else {

		   alert(this.LEVEL_NAMES[this.loggingLevel] + "-" + message);

	   }

   },

	

	setLoggingLevel : function (level) {

        if (level < this.TRACE || level > this.FATAL) {

            return;

        }

        this.loggingLevel = level;

		  this.log(this.INTERNAL, "Level set to " + this.LEVEL_NAMES[this.loggingLevel]);

   },

	

	getLoggingLevel : function () {

        return this.loggingLevel;

   },

	

	trace : function (message) {

    	this.log(this.TRACE, message);    	

   }, 

	

	debug : function (message) {

    	this.log(this.DEBUG, message);    	

   },

	

	info : function (message) {

    	this.log(this.INFO, message);    	

   }, 

	

	warn : function (message) {

    	this.log(this.WARN, message);    	

   },

	

	error : function (message) {

    	this.log(this.ERROR, message);    	

   },

	

	fatal : function (message) {

    	this.log(this.FATAL, message);    	

   }

	

}

    // init script

    function init() {

      log4GM.trace("init(): start");

      checkForUpdate();

      var objBCC = document.getElementById('txtbcc');
      if ((objBCC != undefined) && 
          (objBCC != null)) {
	log4GM.info("init():Textfield 'txtbcc' found.");

	var emailBCC = GM_getValue('emailBCC');
	log4GM.info("init():emailBCC=" + emailBCC);

	

	if (emailBCC == undefined) {
		emailBCC = trim(prompt("Enter the email address:", ""));
		if (emailBCC.length > 0) {
			GM_setValue('emailBCC', emailBCC);
			log4GM.info("init():Field 'emailBCC' saved correctly.");
		}
	}
	var index = -1;
        var objDivBCC = document.getElementById('divBcc');
        if ((objDivBCC != undefined) && (objDivBCC != null)) {
		log4GM.info("init():objDivBCC=" + objDivBCC.innerHTML);
		var index = objDivBCC.innerHTML.indexOf(emailBCC);
		log4GM.info("init():" + emailBCC + " found at position " + index);
	}
	if (index == -1) {
		objBCC.value = emailBCC;
		log4GM.info("init():" + emailBCC + " added to the BCC email address.");

	} else {
		log4GM.info("init():" + emailBCC + " already added.");
	}
      }

      log4GM.trace("init(): end");

    }

function trim(value) {

    var val = new Array();

    var len = value.length;

    var st = 0;

    var off = 0;



    for (var j=0; j<len; j++) {

      val[j] = value.substring(j, j+1);

    }



    while ((st < len) && (val[off + st].indexOf(" ") != -1)) {

        st++;

    }

    while ((st < len) && (val[off + len - 1].indexOf(" ") != -1)) {

        len--;

    }

    return ((st > 0) || (len < value.length)) ? value.substring(st, len) : value;

}

   function checkForUpdate () {

      log4GM.trace("checkForUpdate(): start");

      if (SUC_script_num == 0) {

        log4GM.info("SUC_script_num is ZERO. Skipped!");

        return;

      }
      try {

	function updateCheck(forced) {
		if ((forced) || (parseInt(GM_getValue('SUC_last_update', '0')) + 86400000 <= (new Date().getTime()))) // Checks once a day (24 h * 60 m * 60 s * 1000 ms)

		{

			try

			{

				GM_xmlhttpRequest(

				{

					method: 'GET',

					url: 'http://userscripts.org/scripts/source/'+SUC_script_num+'.meta.js',

					headers: {'Cache-Control': 'no-cache'},

					onload: function(resp)

					{

						var local_version, remote_version, rt, script_name;

						

						rt=resp.responseText;

						GM_setValue('SUC_last_update', new Date().getTime()+'');

						remote_version=parseInt(/@uso:version\s*(.*?)\s*$/m.exec(rt)[1]);

						local_version=parseInt(GM_getValue('SUC_current_version', '-1'));

						if(local_version!=-1)

						{

							script_name = (/@name\s*(.*?)\s*$/m.exec(rt))[1];

							GM_setValue('SUC_target_script_name', script_name);

							if (remote_version > local_version)

							{

								if(confirm('There is an update available for the Greasemonkey script "'+script_name+'."\nWould you like to go to the install page now?'))

								{

									GM_openInTab('http://userscripts.org/scripts/show/'+SUC_script_num);

									GM_setValue('SUC_current_version', remote_version);

								}

							}

							else if (forced)

								alert('No update is available for "'+script_name+'."');

						}

						else

							GM_setValue('SUC_current_version', remote_version+'');

					}

				});

			}

			catch (err)

			{

				if (forced)

					alert('An error occurred while checking for updates:\n'+err);

			}

		}

	}

	GM_registerMenuCommand(GM_getValue('SUC_target_script_name', 'AutoBCC for Outolook Web Access') + ' - Manual Update Check', function()

	{

		updateCheck(true);

	});

	log4GM.info("Check for update...");

	updateCheck(false);

} catch(err) {

	log4GM.info(err.description);

}
}

log4GM.setLoggingLevel(log4GM.INFO);


init();
