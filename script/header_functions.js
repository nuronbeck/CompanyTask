var defaultLanguage = "ENG";
handleSiteLanguage("storageLanguage");
loadSiteTranslate();
navCurrentLanguageSetActive();

function loadSiteTranslate()
{
	$.get('img/lang/languages.json', function(data)
	{
		var languageData = $.parseJSON(data);
		//console.log($.parseJSON(data));
		headerLanguageFix(languageData);
		homePageContentLanguageFix(languageData);
		signUpPageFormLanguageFix(languageData);
	}, 'text');
}

function handleSiteLanguage(languageValue)
{
	if (localStorage.getItem(languageValue) != null)
	{
		setLanguage(localStorage.getItem(languageValue)); 
	}
	else { setLanguage(defaultLanguage); }
}

function setLanguage(anotherLanguage)
{
	defaultLanguage = anotherLanguage;
}

function headerLanguageFix(langObject)
{
	$("#menuHomeLink").text(langObject[defaultLanguage].menu[0]);
	$("#menuProfileDropdown").text(langObject[defaultLanguage].menu[1]);
	$("#menuSignInLink").text(langObject[defaultLanguage].menu[2]);
	$("#menuSignUpLink").text(langObject[defaultLanguage].menu[3]);
}
function homePageContentLanguageFix(langObject)
{
	$("#homePageContentPrivacyTitle").text(langObject[defaultLanguage].home.cardTitle);
	$("#homePageContentPrivacyText").text(langObject[defaultLanguage].home.cardText);
}

function signUpPageFormLanguageFix(langObject)
{
	$("#signUpFormTitleName").text(langObject[defaultLanguage].signUp.formTitle);
	$("#labelFirstNameTitle").text(langObject[defaultLanguage].signUp.firstNameTitle);
	$("#labelLastNameTitle").text(langObject[defaultLanguage].signUp.lastNameTitle);
	$("#labelEmailTitle").text(langObject[defaultLanguage].signUp.emailTitle);
	$("#labelPasswordTitle").text(langObject[defaultLanguage].signUp.passwordTitle);
	$("#passwordHelperTitle").text(langObject[defaultLanguage].signUp.passwordHelper);
	$("#labelConfirmPasswordTitle").text(langObject[defaultLanguage].signUp.confirmPasswordTitle);
	$("#labelDateBirthTitle").text(langObject[defaultLanguage].signUp.birthdayTitle);

	$("#labelGenderTitle").text(langObject[defaultLanguage].signUp.genderTitle);
	$("#labelSignUpAgreementTitle").text(langObject[defaultLanguage].signUp.agreementChecker);
	$("#signUpButton").text(langObject[defaultLanguage].signUp.signUpButtonText);
}


function navCurrentLanguageSetActive()
{
	var langsList = $("#langsList .languageChoose");
	for(var i = 0; i < langsList.length; i++) {
		if ($(langsList[i]).text() == defaultLanguage)
		{
			$("#langDropDown").html($(langsList[i]).html());
			$("#langsList .active").removeClass("active");
			$(langsList[i]).addClass("active");
		}
	}
}

$(".languageChoose").click(function(event){
	event.preventDefault();
	var clickedLanguage = $(this).text();
	localStorage.setItem("storageLanguage", clickedLanguage);

	handleSiteLanguage("storageLanguage");
	loadSiteTranslate();

	//$("#langDropDown").html($(this).html());
	navCurrentLanguageSetActive();
});