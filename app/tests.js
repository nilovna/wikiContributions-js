$(document).ready(function(){
	run_tests();
});

var templateGlobal = "{{user}} a contribué à {{nombreArticles}} articles, dont\n" +
	"{{nbAjouts}} ajouts on été faits\n" +
	"de ses articles,\n" +
	"{{nbSurvie}} survivent aujourd'hui\n" + 
	"{{nbAjoutsRef}} ajouts comportent des références\n" + 
	"{{nbRetraits}} retraits on été faits\n" + 
	"Il a proposé {{nbCommentaires}} dans la section discussion\n" + 
	"dont {{nbCommentairesReponses}} sont suivis de réponses\n" +
	"Il a aussi répondu à {{nbReponses}} commentaires/questions";

var templateSpecifique = "{{user}} a fait, pour l'article {{nomArticle}}\n" +
	"{{nbAjouts}} ajouts on été faits\n" +
	"de cet article,\n" + 
	"{{nbSurvie}} survivent aujourd'hui\n" + 
	"{{nbAjoutsRef}} ajouts comportent des références\n" + 
	"{{nbRetraits}} retraits on été faits\n" + 
	"Il a proposé {{nbCommentaires}} commentaires dans la section discussion\n" + 
	"dont {{nbCommentairesReponses}} sont suivis de réponses\n" +
	"Il a aussi répondu à {{nbReponses}} commentaires/questions"

var testCase1 = {
	"query": {
		"usercontribs": [
			{
				"pageid":31612604,
				"title":"Mon Premier Article",
				"user":"Nowa",
				"userid":"303089"
			}
		]
	}
}

/**
 * On simule l'implementation de la fonctionnalité
 */
function mockRapportSommaireGlobal(data){

}
function mockNbRef(data){


}

function testNbReference(){
	
}
/**
 * On lance les tests pour un rapport sommaire global
 */
function testRappportSommaireGlobal(){

	// Case #1
	

}
function rapportSommaireArticle(){
	return {
		"nom":"Mon Premier Article",
		"contributions":{
			"total":2,
			"enVie":0,
			"avecRefs":1
		},
		"discussion":{
			"commentaires":0,
			"reponses":0,
		},
		"reponses":0
	}
}

function run_tests(){
	testRappportSommaireGlobal();

}

var caseModules = {
	"nbRef":{
		"data": ['<ins><p>The webcomic <a title="Xkcd" href="/wiki/Xkcd">xkcd</a> by Randall Munroe illustrated the landing event live with a 152 drawing <a title="Flip book" href="/wiki/Flip_book">flip book</a>' +
				'book narrating the probe and the orbiter.<sup id="cite_ref-89" class="reference"><a href="#cite_note-89"><span></span>89<span></span></a></sup></ins>',
				'<del><p>The webcomic <a title="Xkcd" href="/wiki/Xkcd">xkcd</a> by Randall Munroe illustrated the landing event live with a 152 drawing <a title="Flip book" href="/wiki/Flip_book">flip book</a>' +
				'book narrating the probe and the orbiter.<sup id="cite_ref-89" class="reference"><a href="#cite_note-89"><span></span>89<span></span></a></sup></del>',
				'<ins><p>The webcomic</p></ins>',
				'<ins><p><a title="Test" href="/wiki/test">test</a></p></ins>'
		],
		"expected":[3,0,0,1
		]
	},
	"rapportSommaireGlobal": {
		"data": [
			{
			    "query-continue": {
			        "usercontribs": {
			            "uccontinue": "20140807234810|620301492"
			        }
			    },
			    "warnings": {
			        "query": {
			            "*": "Formatting of continuation data will be changing soon. To continue using the current formatting, use the 'rawcontinue' parameter. To begin using the new format, pass an empty string for 'continue' in the initial query."
			        }
			    },
			    "query": {
			        "usercontribs": [{
			            "userid": "303089",
			            "user": "Nowa",
			            "pageid": 31612604,
			            "revid": 634860786,
			            "parentid": 634847177,
			            "ns": 0,
			            "title": "Fukushima I Nuclear Power Plant",
			            "timestamp": "2014-11-21T18:19:21Z",
			            "top": "",
			            "comment": "Undid revision 634847177 by [[Special:Contributions/176.105.131.104|176.105.131.104]] ([[User talk:176.105.131.104|talk]])rv unexplained redirect",
			            "size": 108
			        }, {
			            "userid": "303089",
			            "user": "Nowa",
			            "pageid": 524434,
			            "revid": 634860680,
			            "parentid": 634854692,
			            "ns": 0,
			            "title": "Philae (spacecraft)",
			            "timestamp": "2014-11-21T18:18:20Z",
			            "comment": "Undid revision 634854692 by [[Special:Contributions/24.43.3.130|24.43.3.130]] ([[User talk:24.43.3.130|talk]])supported by RS.  If you really think it's trivia, then please explain on talk page.",
			            "size": 55883
			        }, {
			            "userid": "303089",
			            "user": "Nowa",
			            "pageid": 524434,
			            "revid": 634620844,
			            "parentid": 634586610,
			            "ns": 0,
			            "title": "Philae (spacecraft)",
			            "timestamp": "2014-11-20T00:26:23Z",
			            "comment": "/* In popular culture */ found rs",
			            "size": 55133
			        }, {
			            "userid": "303089",
			            "user": "Nowa",
			            "pageid": 524434,
			            "revid": 634539833,
			            "parentid": 634539462,
			            "ns": 0,
			            "title": "Philae (spacecraft)",
			            "timestamp": "2014-11-19T14:20:25Z",
			            "comment": "/* International contributions */ link to solar particle events",
			            "size": 54763
			        }, {
			            "userid": "303089",
			            "user": "Nowa",
			            "pageid": 524434,
			            "revid": 634539462,
			            "parentid": 634517629,
			            "ns": 0,
			            "title": "Philae (spacecraft)",
			            "timestamp": "2014-11-19T14:17:32Z",
			            "comment": "/* International contributions */ link to space weather",
			            "size": 54738
			        }]
			    }
			}
		],
		"expected" : [
			{
				"user":"Nowa",
				"nombreArticles":5,
				"nbAjouts":0,
				"nbSurvie":0,
				"nbAjoutsRef":0,
				"nbRetraits":0,
				"nbCommentaires":0,
				"nbCommentairesReponses":0,
				"nbReponses":0
			}
		]
	}
	}

function replaceValues(value,template){
	for (var key in value) {
		if (value.hasOwnProperty(key)) {
			template=template.replace("{{"+value[key]+"}}", value[key]); 
		}
	}
	return template;
}
