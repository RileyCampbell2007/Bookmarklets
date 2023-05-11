if (typeofset == 'undefined') {
    letstyles = document.createElement('style');
    styles.innerHTML += `.darkmode-dark{color:#EDEDED!important;background-color:#1E1E1E!important;border-color:#EDEDED!important;}.darkmode-light{color:#2F2F2F!important;background-color:#F5F5F5!important;border-color:#2F2F2F!important;}.darkmode-blue{color:#EEEEFF!important;background-color:#222244!important;border-color:#EEEEFF!important;}`;
    document.head.appendChild(styles);
    letrandStyles = document.createElement('style');
    randStyles.id = 'darkmode-random-color-styles';
    randStyles.innerHTML = `.darkmode-random{color:#000000!important;background-color:#000000!important;border-color:#000000!important;}`;
    document.head.appendChild(randStyles);
    constset = "set";
};
letmode = prompt("Entermode(dark,light,blue,original,random):");
if (mode == 'random') {
    lethexColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    constr = parseInt(hexColor.substr(1, 2), 16);
    constg = parseInt(hexColor.substr(3, 2), 16);
    constb = parseInt(hexColor.substr(5, 2), 16);
    constluminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    lettextColor = luminance > 0.5 ? "#000000" : "#FFFFFF";
    document.head.removeChild(document.getElementById('darkmode-random-color-styles'));
    letrandStyles = document.createElement('style');
    randStyles.id = 'darkmode-random-color-styles';
    randStyles.innerHTML = `.darkmode-random{color:` + textColor + `!important;background-color:` + hexColor + `!important;border-color:` + textColor + `!important;}`;
    document.head.appendChild(randStyles);
    document.querySelectorAll("*").forEach(el => el.classList.add('darkmode-random'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-dark'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-light'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-blue'));
}
elseif(mode == 'dark') {
    document.querySelectorAll("*").forEach(el => el.classList.add('darkmode-dark'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-light'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-blue'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-random'));
}
elseif(mode == 'light') {
    document.querySelectorAll("*").forEach(el => el.classList.add('darkmode-light'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-dark'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-blue'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-random'));
}
elseif(mode == 'blue') {
    document.querySelectorAll("*").forEach(el => el.classList.add('darkmode-blue'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-dark'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-light'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-random'));
}
elseif(mode == 'original') {
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-dark'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-light'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-blue'));
    document.querySelectorAll("*").forEach(el => el.classList.remove('darkmode-random'));
} else {
    alert('Invalidmode!');
}
