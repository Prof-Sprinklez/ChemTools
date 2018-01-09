//App Storage
const pdt = [
		['H|Hydrogen|1.008','%16','He|Helium|4.0026'],
		['Li|Lithium|6.94','Be|Beryllium|9.0122','%10','B|Boron|10.81','C|Carbon|12.011','N|Nitrogen|14.007','O|Oxygen|15.999','F|Flourine|18.9984','Ne|Neon|20.1797'],
		['Na|Sodium|22.9898','Mg|Magnesium|24.3050','%10','Al|Aluminum|26.9815','Si|Silicon|28.085','P|Phosphorus|30.9738','S|Sulfur|32.06','Cl|Chlorine|35.45','Ar|Argon|39.948'],
		['K|Potassium|39.0983','Ca|Calcium|40.078','Sc|Scandium|44.9559','Ti|Titanium|47.867','V|Vanadium|50.9415','Cr|Chromium|51.9961','Mn|Manganese|54.9380','Fe|Iron|55.845','Co|Cobalt|58.9332','Ni|Nickel|58.6934','Cu|Copper|63.546','Zn|Zinc|65.38','Ga|Gallium|69.723','Ge|Germanium|72.64','As|Arsenic|74.9216','Se|Selenium|78.96','Br|Bromine|79.904','Kr|Krypton|83.798'],
		['Rb|Rubidium|85.4678','Sr|Strontium|87.62','Y|Yttrium|88.9059','Zr|Zirconium|91.224','Nb|Niobium|92.9064','Mo|Molybdenum|95.96','Tc|Technetium|(97.9072)','Ru|Ruthenium|101.07','Rh|Rhodium|102.9055','Pd|Palladium|106.42','Ag|Silver|107.8682','Cd|Cadmium|112.411','In|Indium|114.818','Sn|Tin|118.710','Sb|Antimony|121.760','Te|Tellurium|127.60','I|Iodine|126.9045','Xe|Xenon|131.293'],
		['Cs|Cesium|132.9055','Ba|Barium|137.327','La|Lanthanum|138.9055','^72','Hf|Hafnium|178.49','Ta|Tantalum|180.9479','W|Tungsten|183.84','Re|Rhenium|186.207','Os|Osmium|190.23','Ir|Iridium|192.217','Pt|Platinum|195.084','Au|Gold|196.9666','Hg|Mercury|200.59','Tl|Thallium|204.38','Pb|Lead|207.2','Bi|Bismuth|208.9804','Po|Polonium|(208.9824)','At|Astatine|(209.9871)','Rn|Radon|(222.0176)'],
		['Fr|Francium|(223.0197)','Ra|Radium|(226.0254)','Ac|Actinium|(227.0278)','^104','Rf|Rutherfordium|(265.1167)','Db|Dubnium|(268.125)','Sg|Seaborgium|(271.133)','Bh|Bohrium|(272)','Hs|Hassium|(277.150)','Mt|Meitnerium|(276.151)','Ds|Darmstadtium|(281.162)','Rg|Roentgenium|(280.164)','Cn|Copernicium|(285.174)','Nh|Nihonium|(284.178)','Fl|Flerovium|(289.189)','Mc|Moscovium|(288.192)','Lv|Livermorium|(293)','Ts|Tennessine|(293)','Og|Oganesson|(294)'],
		["%18"],
		['%2','^58','Ce|Cerium|140.116','Pr|Praseodymium|140.9077','Nd|Neodymium|144.242','Pm|Promethium|(144.9127)','Sm|Samarium|150.36','Eu|Europium|151.964','Gd|Gadolinium|157.25','Tb|Terbium|158.9254','Dy|Dysprosium|162.500','Ho|Holmium|164.9303','Er|Erbium|167.259','Tm|Thulium|168.9342','Yb|Ytterbium|173.054','Lu|Lutetium|174.9668'],
		['%2','^90','Th|Thorium|232.0381','Pa|Protactinium|231.0359','U|Uranium|238.0289','Np|Neptunium|(237.0482)','Pu|Plutonium|(244.0642)','Am|Americium|(243.0614)','Cm|Curium|(247.0704)','Bk|Berkelium|(247.0703)','Cf|Californium|(251.0796)','Es|Einsteinium|(252.0830)','Fm|Fermium|(257.0951)','Md|Mendelevium|(258.0984)','No|Nobelium|(259.1010)','Lr|Lawrencium|(262.1096)']
	],
	pdt_group_0 = [3,4,11,12,13,19,20,31,37,38,49,50,55,56,81,82,83,84,87,88,113,114,115,116,117],
	pdt_group_1 = [21,22,23,24,25,26,27,28,29,30,39,40,41,42,43,44,45,46,47,48,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112],
	pdt_group_2 = [5,14,32,33,51,52],
	pdt_group_3 = [1,2,6,7,8,9,10,15,16,17,18,34,35,36,53,54,85,86,118],
	peffect = 1;
var pdtInfo, elemPressed, removeCountdown, pdtElems = [], pdtMaxLength = 0, e = 0, p = 0, mode = 0, slide = 0;


//Add Event Listeners
window.addEventListener("DOMContentLoaded", setup);

//Methods
function setup() {
	var rippleElems = document.querySelectorAll(".ripples"), body = document.getElementById("main_body");
	document.getElementById("header_links").addEventListener("click", toggleLinks);
	document.getElementById("link_close").addEventListener("click", toggleLinks);
	document.getElementById("go_pdc").addEventListener("click", () => openApp('go_pdc', 'pdc', '#3F51B5'));
	document.getElementById("go_vis").addEventListener("click", () => openApp('go_vis', 'vis', '#607D8B'));
	document.getElementById("go_spell").addEventListener("click", () => openApp('go_spell', 'spell', '#795548'));
	document.getElementById("go_mm").addEventListener("click", () => openApp('go_mm', 'mm', '#2196F3'));
	document.getElementById("go_energy").addEventListener("click", () => openApp('go_energy', 'energy', '#FFC107'));
	document.getElementById("app_close").addEventListener("click", closeApp);
	for (let p = 0, l = pdt.length; p < l; p++) {
		for (let g = 0, l = pdt[p].length; g < l; g++) {
			var elem = pdt[p][g].split("|")[0];
			if (elem.substring(0, 1) !== "%" && elem.substring(0, 1) !== "^") {
				if (elem.length > pdtMaxLength) pdtMaxLength = elem.length;
				pdtElems.push(elem.toLowerCase());
			}
		}
	}
	for (let i = 0, l = rippleElems.length; i < l; i++) addRipplesTo(rippleElems[i]);
	setTimeout(() => animateCards(0, body), 200);
}

function animateCards(index, body) {
	body.children[index].classList.add("card-open");
	if (index + 1 < body.childElementCount) setTimeout(() => animateCards(index + 1, body), 80);
}

function toggleLinks() {
	var menu = document.getElementById("overlay").classList;
	if (menu.contains("overlay-visible")) menu.remove("overlay-visible");
	else menu.add("overlay-visible");
}

function openApp(card, appName, color) {
	var card = document.getElementById(card), appBody = document.getElementById("app_body"), cover = document.createElement("div");
	document.getElementById("app_header").style.backgroundColor = color;
	document.getElementById("app_title").firstChild.nodeValue = card.firstElementChild.firstChild.nodeValue;
	document.getElementById("app_main").classList.add("app-open");
	while (appBody.firstChild) appBody.removeChild(appBody.firstChild);
	cover.classList.add("app-cover");
	appBody.appendChild(cover);
	switch (appName) {
		case "pdc":
			buildPDC(cover);
			break;
		case "vis":
			buildVis(cover);
			break;
		case "spell":
			buildSpell(cover);
			break;
		case "mm":
			buildMM(cover);
			break;
		case "energy":
			buildEnergy(cover);
	}
}

function closeApp() {
	document.getElementById("app_main").classList.remove("app-open");
	pdtInfo = null;
	e = 0;
	p = 0;
	slide = 0;
}

function buildEnergy(body) {
	var next = document.createElement("div"), prev = document.createElement("div"), cont = document.createElement("div"),
		frag = document.createDocumentFragment();
	next.classList.add("tutorial-next");
	prev.classList.add("tutorial-prev");
	next.addEventListener("click", () => energySlide(cont, slide + 1));
	prev.addEventListener("click", () => energySlide(cont, slide - 1));
	next.appendChild(document.createTextNode("NEXT"));
	prev.appendChild(document.createTextNode("PREVIOUS"));
	body.appendChild(prev);
	body.appendChild(next);
	cont.classList.add("slides-container");
	energySlide(cont, slide, true);
	body.appendChild(cont);
}

function energySlide(body, num, open) {
	if (num < 0) num = 0;
	else if (num > 3) num = 3;
	if (open || slide !== num) {
		slide = num;
		while (body.firstChild) body.removeChild(body.firstChild);
		switch (slide) {
			case 0:
				var title = document.createElement("span"), desc = document.createElement("span"), center = document.createElement("center"),
					solid = document.createElement("div"), liquid = document.createElement("div"), gas = document.createElement("div");
				title.classList.add("slide-title");
				title.appendChild(document.createTextNode("What are states of matter?"));
				desc.classList.add("slide-desc");
				desc.appendChild(document.createTextNode("States of matter are distinct forms in which matter can exist (There are more than 3 but these are the most important)"));
				solid.classList.add("slide-solids");
				solid.appendChild(document.createTextNode("An ordered arrangement where particles are close together and essentially fixed in place"));
				liquid.classList.add("slide-liquids");
				liquid.appendChild(document.createTextNode("Particles still close together, but can move more freely relative to each other"));
				gas.classList.add("slide-gases");
				gas.appendChild(document.createTextNode("Particles have complete freedom of motion and the distance between them is much greater"));
				body.appendChild(title);
				body.appendChild(desc);
				center.appendChild(solid);
				center.appendChild(liquid);
				center.appendChild(gas);
				body.appendChild(center);
				break;
			case 1:
				var title = document.createElement("span"), desc = document.createElement("span"), img = document.createElement("div");
				title.classList.add("slide-title");
				title.appendChild(document.createTextNode("Phases"));
				desc.classList.add("slide-desc");
				desc.appendChild(document.createTextNode("Phases are determined by temperature, pressure, and the strength of IMFs between molecules"));
				img.classList.add("slide-phases");
				body.appendChild(title);
				body.appendChild(desc);
				body.appendChild(img);
				break;
			case 2:
				var title = document.createElement("span"), general = document.createElement("div"), center = document.createElement("center"),
					fusion = document.createElement("div"), vapor = document.createElement("div"), fus = document.createElement("span"),
					vap = document.createElement("span");
				title.classList.add("slide-title");
				title.appendChild(document.createTextNode("Phase Equations"));
				general.classList.add("slide-phase-equation", "equation-general");
				general.appendChild(document.createTextNode("q = mc\u0394T"));
				general.appendChild(document.createElement("br"));
				general.appendChild(document.createTextNode("Energy required to increase the temperature of a solid or liquid not changing phase"));
				fusion.classList.add("slide-phase-equation", "equation-fusion");
				fusion.appendChild(document.createTextNode("q = n\u0394H"));
				fus.classList.add("phase-equation-type");
				fus.appendChild(document.createTextNode("fus"));
				fusion.appendChild(fus);
				fusion.appendChild(document.createElement("br"));
				fusion.appendChild(document.createTextNode("Energy required to change a solid at its melting point to a liquid"));
				vapor.classList.add("slide-phase-equation", "equation-vapor");
				vap.classList.add("phase-equation-type");
				vap.appendChild(document.createTextNode("vap"));
				vapor.appendChild(document.createTextNode("q = n\u0394H"));
				vapor.appendChild(vap);
				vapor.appendChild(document.createElement("br"));
				vapor.appendChild(document.createTextNode("Energy required to change a liquid at its boiling point to a gas"));
				body.appendChild(title);
				center.appendChild(general);
				center.appendChild(fusion);
				center.appendChild(vapor);
				body.appendChild(center);
				break;
			case 3:
				var title = document.createElement("span"), desc = document.createElement("span"), energy = document.createElement("input"), 
					mass = document.createElement("input"), center = document.createElement("center"), results = document.createElement("div"), 
					temp = document.createElement("span"), phase = document.createElement("span");
				title.classList.add("slide-title");
				title.appendChild(document.createTextNode("Interactive Example"));
				desc.classList.add("slide-desc");
				desc.appendChild(document.createTextNode("Input energy in J and grams of water to see what state and temperature the water would be at standard temperature and pressure"));	
				energy.id = "energy_energy";
				energy.classList.add("spell-input", "energy-input");
				energy.placeholder = "Energy (J)";
				energy.addEventListener("keyup", updateEnergy);
				mass.id = "energy_mass";
				mass.classList.add("spell-input", "energy-input", "mass-input");
				mass.placeholder = "Mass (g)";
				mass.addEventListener("keyup", updateEnergy);
				results.classList.add("energy-results");
				temp.id = "energy_temp";
				temp.classList.add("energy-temp");
				temp.appendChild(document.createTextNode("0"));
				phase.id = "energy_phase";
				phase.classList.add("energy-phase");
				phase.appendChild(document.createTextNode("Solid"));
				body.appendChild(title);
				body.appendChild(desc);
				center.appendChild(energy);
				center.appendChild(mass);
				results.appendChild(phase);
				results.appendChild(document.createTextNode(" at "));
				results.appendChild(temp);
				results.appendChild(document.createTextNode("\xB0C"));
				center.appendChild(results);
				body.appendChild(center);
				updateEnergy();
		}
	}
}

function updateEnergy() {
	var energy = parseFloat(document.getElementById("energy_energy").value.trim()), mass = parseFloat(document.getElementById("energy_mass").value.trim()), 
		output = document.getElementById("energy_output"), temp = document.getElementById("energy_temp").firstChild, phase = document.getElementById("energy_phase").firstChild,
		c = 4.18, fus = 333.55, vap = 2257;
		if (!isNaN(energy) && !isNaN(mass)) {
			var total = energy, melt = (mass / 18.015) * fus, heat1 = mass * c * 100, boil = (mass / 18.015) * vap, liqTemp;
			if (total < melt) {
				phase.nodeValue = "Solid";
				temp.nodeValue = 0;
			} else {
				total -= melt;
				if (total <= heat1) {
					phase.nodeValue = "Liquid";
					temp.nodeValue = parseFloat(total / (mass * c)).toFixed(1);
				} else {
					if (total - heat1 > boil) {
						total -= (heat1 + boil);
						phase.nodeValue = "Gas";
						temp.nodeValue = parseFloat((energy - boil) / (mass * c)).toFixed(1);
					} else {
						phase.nodeValue = "Liquid";
						temp.nodeValue = 100;
					}
				}
			}
		}	
}

function buildMM(body) {
	var input = document.createElement("input"), desc = document.createElement("span"), 
		output = document.createElement("span"), output_units = document.createElement("span"), modes = document.createElement("div");
	input.classList.add("spell-input", "mm-input");
	input.type = "text";
	input.id = "mm_input";
	input.addEventListener("keyup", calculateMM);
	desc.classList.add("spell-desc");
	desc.appendChild(document.createTextNode("Enter an element or compound its info, e.g. H2O (capitalization matters)"));
	output.classList.add("mm-output");
	output.id = "mm_output";
	output_units.classList.add("mm-output-units");
	output_units.id = "mm_units";
	modes.classList.add("mm-modes", "mode-mm");
	modes.id = "mm_modes";
	if (mode === 0) {
		modes.appendChild(document.createTextNode("Valence Electrons"));
		output.appendChild(document.createTextNode("0.000"));
		output_units.appendChild(document.createTextNode("g/mol"));
	} else {
		modes.appendChild(document.createTextNode("Molar Mass"));
		output.appendChild(document.createTextNode("0"));
		output_units.appendChild(document.createTextNode("VE"));
	}
	output.appendChild(output_units);
	modes.addEventListener("click", () => changeMode());
	addRipplesTo(modes);
	body.appendChild(modes);
	body.appendChild(input);
	body.appendChild(desc);
	body.appendChild(output);
}

function changeMode() {
	if (mode === 0) {
		mode = 1;
		document.getElementById("mm_modes").firstChild.nodeValue = "Molar Mass";
		document.getElementById("mm_units").firstChild.nodeValue = "VE";
	} else {
		mode = 0;
		document.getElementById("mm_modes").firstChild.nodeValue = "Valence Electrons";
		document.getElementById("mm_units").firstChild.nodeValue = "g/mol";
	}
	calculateMM();
}

function calculateMM() {
	var input = document.getElementById("mm_input").value.trim(), mm = "";
	for (let i = 0, l = input.length; i < l; i++) {
		if (input.charAt(i) === '(') mm += '((';
		else if (input.charAt(i) === ')') {
			mm += ')';
			for (let n = i + 1, l = input.length; n < l; n++) {
				if (n === i + 1) mm += '*';
				if (!isNaN(parseInt(input.charAt(n)))) mm += input.charAt(n);
				else break;
			}
			mm += ')+';
		}
		LENGTH: for (let k = pdtMaxLength; k > 0; k--) {
			var data = getPDTData(input.substring(i, i + k)), dt;
			if (data && mode === 1) dt = data[4][0];
			else if (data) dt = data[2];
			if (data) {
				var operator = ')+', num;
				if (i + data[0].length >= l || input.charAt(i + data[0].length) === ')') operator = ')';
				for (let j = i + k, l = input.length; j < l; j++) {
					if (!isNaN(parseInt(input.charAt(j)))) {
						if (j === i + k) num = '*';
						num += input.charAt(j);
					} else break;
				}
				if (num) {
					operator = num + operator;
					num = undefined;
				}
				mm += '(' + dt + operator;
				i += data[0].length - 1;
				break LENGTH;
			}
		}
	}
	if (mm.substring(mm.length - 1, mm.length) === '+') mm = mm.substring(0, mm.length - 1);
	if (!isNaN(input.charAt(0))) mm = input.charAt(0) + '*(' + mm + ')';
	mm = mm.replace(/(\)\+\))/g, '))');
	returnMM(mm);
}

function returnMM(mm) {
	var output;
	try {
		output = eval(mm).toString();
	} catch(err) {
		if (mode === 0) output = "0.00";
		else output = "0";
	}
	if (mode === 0) output = parseFloat(output).toFixed(3);
	document.getElementById("mm_output").firstChild.nodeValue = output;
}

function buildSpell(body) {
	var input = document.createElement("input"), desc = document.createElement("span"), output = document.createElement("center"),
		empty = document.createElement("div");
	input.classList.add("spell-input");
	input.type = "text";
	input.id = "spell_input";
	input.addEventListener("keydown", function(evt) {
		if (evt.code === "Space") evt.preventDefault();
	});
	input.addEventListener("keyup", (evt) => spellAtom(evt));
	desc.classList.add("spell-desc");
	desc.appendChild(document.createTextNode("Enter a word to be spelled using elements from the Periodic Table"));
	output.classList.add("spell-output");
	output.id = "spell_output";
	empty.classList.add("spell-elem", "spell-empty");
	empty.appendChild(document.createTextNode("No Words Found"));
	output.appendChild(empty);
	body.appendChild(input);
	body.appendChild(desc);
	body.appendChild(output);
	body.addEventListener("click", function(evt) {
		if (pdtInfo && !evt.target.classList.contains("spell-elem") && !pdtInfo.contains(evt.target)) {
			body.removeChild(pdtInfo);
			pdtInfo = null;
		}
	});
}

function spellAtom() {
	var input = document.getElementById("spell_input").value.toLowerCase(), output = [];
	for (let i = 0, l = input.length; i < l; i++) {
		var found = false;
		for (let k = pdtMaxLength; k > 0; k--) {
			var index = pdtElems.indexOf(input.substring(i, i + k));
			if (index !== -1) {
				output.push(pdtElems[index]);
				i += pdtElems[index].length - 1;
				found = true;
				break;
			}
		}
		if (!found) {
			output = [];
			break;
		}
	}
	if (output.length === 0) buildWord(['No Words Found'], true);
	else buildWord(output);
}

function buildWord(output, empty) {
	var container = document.getElementById("spell_output");
	while (container.firstChild) container.removeChild(container.firstChild);
	for (let i = 0, l = output.length; i < l; i++) {
		var elem = document.createElement("div"), symbol = output[i];
		elem.classList.add("spell-elem");
		if (empty) elem.classList.add("spell-empty")
		elem.appendChild(document.createTextNode(symbol));
		if (!empty) {
			var data = getPDTData(symbol, true), atomNum = data[3];
			if (pdt_group_0.indexOf(atomNum) !== -1) elem.classList.add("pdt-group-0");
			else if (pdt_group_1.indexOf(atomNum) !== -1) elem.classList.add("pdt-group-1");
			else if (pdt_group_2.indexOf(atomNum) !== -1) elem.classList.add("pdt-group-2");
			else if (pdt_group_3.indexOf(atomNum) !== -1) elem.classList.add("pdt-group-3");
			elem.setAttribute("data", data.join("|"));
			elem.addEventListener("click", showInfo);
			addRipplesTo(elem);
		}
		container.appendChild(elem);
	}
}

function getPDTData(symbol, ignoreCase) {
	var atomNum = 1, data, output = [], col = 0, row = 0;
	OUTER: for (let p = 0, l = pdt.length; p < l; p++) {
		col = 0;
		for (let g = 0, gl = pdt[p].length; g < gl; g++) {
			var itm = pdt[p][g], itmSym = itm.split("|")[0];
			if (ignoreCase) itmSym = itmSym.toLowerCase();
			if (itm.substring(0, 1) === "^") atomNum = parseInt(itm.substring(1));
			else if (itm.substring(0, 1) !== "%") {
				atomNum++;
				col++;
			}
			if (itmSym === symbol) {
				data = itm;
				col = g;
				row = p + 1;
				break OUTER;
			}
		}
	}
	if (data) {
		var preData = data.split("|");
		for (let i = 0, l = preData.length; i < l; i++) output.push(preData[i]);
		output.push(atomNum);
		if (col < 2) col++;
		else if (col > 11) col -= 9;
		if (row > 5 && col > 2) col--;
		output.push([col, row]);
		return output;
	} else return undefined;
}

function buildVis(body) {
	var center = document.createElement("div"), controls = document.createElement("div"), rings = document.createElement("div"),
		etext = document.createElement("span"), eminus = document.createElement("div"), einput = document.createElement("input"), eplus = document.createElement("div"),
		ptext = document.createElement("span"), pminus = document.createElement("div"), pinput = document.createElement("input"), pplus = document.createElement("div");
	center.classList.add("vis-center");
	center.appendChild(document.createTextNode("0"));
	center.id = "vis_center";
	controls.classList.add("vis-controls");
	etext.classList.add("vis-controls-text");
	etext.appendChild(document.createTextNode("Electrons"));
	ptext.classList.add("vis-controls-text");
	ptext.appendChild(document.createTextNode("Protons"));
	einput.classList.add("vis-controls-input");
	einput.type = "number";
	einput.value = 0;
	einput.id = "vis_einput";
	einput.addEventListener("keyup", (evt) => editParticles(evt, 'e'));
	pinput.classList.add("vis-controls-input");
	pinput.type = "number";
	pinput.value = 0;
	pinput.id = "vis_pinput";
	pinput.addEventListener("keyup", (evt) => editParticles(evt, 'p'));
	eminus.classList.add("vis-controls-btn", "icon");
	eminus.addEventListener("click", () => setParticles('e', -1));
	pminus.classList.add("vis-controls-btn", "icon", "vis-controls-p");
	pminus.addEventListener("click", () => setParticles('p', -1));
	eplus.classList.add("vis-controls-btn", "icon", "vis-controls-up");
	eplus.addEventListener("click", () => setParticles('e', 1));
	pplus.classList.add("vis-controls-btn", "icon", "vis-controls-up", "vis-controls-p");
	pplus.addEventListener("click", () => setParticles('p', 1));
	controls.appendChild(etext);
	controls.appendChild(eminus);
	controls.appendChild(einput);
	controls.appendChild(eplus);
	controls.appendChild(document.createElement("br"));
	controls.appendChild(ptext);
	controls.appendChild(pminus);
	controls.appendChild(pinput);
	controls.appendChild(pplus);
	rings.classList.add("vis-rings");
	rings.style.width = body.clientHeight - 150 + "px";
	rings.style.height = body.clientHeight - 150 + "px";
	rings.id = "vis_rings";
	body.appendChild(rings);
	body.appendChild(center);
	body.appendChild(controls);
}

function editParticles(event, type) {
	var val = event.target.value, res;
	if (val.trim().length > 0) {
		try {
			res = parseInt(val);
		} catch(err) {
			res = 0;
		}
		setParticles(type, res - window[type]);
	}
}

function setParticles(particle, change) {
	var elec = e, prot = p;
	if (particle === 'e' && e + change >= 0) {
		e += change;
		document.getElementById("vis_einput").value = e;
	} else if (p + change >= 0) {
		p += change;
		document.getElementById("vis_pinput").value = p;
		document.getElementById("vis_center").firstChild.nodeValue = p;
	}
	if (elec !== e || prot !== p) updateVisModel();
}

function updateVisModel() {
	var rings = document.getElementById("vis_rings"), electrons = e, numRings = 1, size, ringSize;
	while (rings.firstChild) rings.removeChild(rings.firstChild);
	while (electrons > 0) {
		var capacity = 2 * numRings * numRings, ring = document.createElement("div");
		ring.classList.add("vis-ring");
		if (electrons > capacity) {
			electrons -= capacity;
			numRings++;
			placeElectrons(ring, capacity);
		} else {
			placeElectrons(ring, electrons);
			break;
		}
	}
	size = (document.getElementById("app_body").clientHeight - 150 - (peffect * p)) + "px";
	ringSize = (parseInt(size) - 60) / numRings;
	for (let i = 0, l = rings.childElementCount; i < l; i++) {
		rings.children[i].style.width = 60 + (ringSize * (i + 1)) + "px";
		rings.children[i].style.height = 60 + (ringSize * (i + 1)) + "px";
	}
	rings.style.width = size;
	rings.style.height = size;
}

function placeElectrons(ring, number) {
	var deg = 360 / number;
	for (let i = 0, l = number; i < l; i++) {
		var elec = document.createElement("div"), x, y;
		elec.classList.add("vis-electron");
		x = ((Math.cos(deg * (i + 1) * (Math.PI / 180)) * 100) + 100) / 2;
		y = ((Math.sin(deg * (i + 1) * (Math.PI / 180)) * 100) + 100) / 2;
		elec.style.left = x + "%";
		elec.style.top = y + "%";
		ring.appendChild(elec);
	}
	document.getElementById("vis_rings").appendChild(ring);
}

function buildPDC(body) {
	var table = document.createElement("table"), legend = document.createElement("div"), n = 1;
	body.addEventListener("click", function(evt) {
		var classes = evt.target.classList;
		if (classes.contains("pdt-master") || classes.length === 0 || classes.contains("legend") || classes.contains("legend-group")) {
			if (pdtInfo) body.removeChild(pdtInfo);
			pdtInfo = null;
		}
	});
	table.classList.add("pdt-master");
	table.setAttribute("cellpadding", "0");
	table.setAttribute("cellspacing", "0");
	for (let r = 0, lr = pdt.length; r < lr; r++) {
		var row = document.createElement("tr");
		for (let c = 0, lc = pdt[r].length; c < lc; c++) {
			var val = pdt[r][c], firstLet = val.substring(0, 1);
			switch (firstLet) {
				case "^":
					n = parseInt(val.substring(1));
					break;
				case "%":
					var end = parseInt(val.substring(1));
					for (let i = 0, l = end; i < l; i++) row.appendChild(document.createElement("td"));
					break;
				default:
					var elem = document.createElement("td"), data = val.split("|"), top = document.createElement("span"),
						middle = document.createElement("span"), bottom = document.createElement("span");
					elem.classList.add("pdt-cell");
					elem.setAttribute("data", val + "|" + n);
					elem.addEventListener("click", showInfo);
					if (pdt_group_0.indexOf(n) !== -1) elem.classList.add("pdt-group-0");
					else if (pdt_group_1.indexOf(n) !== -1) elem.classList.add("pdt-group-1");
					else if (pdt_group_2.indexOf(n) !== -1) elem.classList.add("pdt-group-2");
					else if (pdt_group_3.indexOf(n) !== -1) elem.classList.add("pdt-group-3");
					top.classList.add("pdt-cell-top");
					top.appendChild(document.createTextNode(n));
					middle.classList.add("pdt-cell-middle");
					middle.appendChild(document.createTextNode(data[0]));
					bottom.classList.add("pdt-cell-bottom");
					bottom.appendChild(document.createTextNode(data[2]));
					elem.appendChild(top);
					elem.appendChild(document.createElement("br"));
					elem.appendChild(middle);
					elem.appendChild(document.createElement("br"));
					elem.appendChild(bottom);
					row.appendChild(elem);
					n++;
			}
		}
		table.appendChild(row);
	}
	body.appendChild(table);
	legend.classList.add("legend");
	var group_0 = document.createElement("div"), group_1 = document.createElement("div"), 
		group_2 = document.createElement("div"), group_3 = document.createElement("div");
	group_0.classList.add("legend-group-0", "legend-group");
	group_0.appendChild(document.createTextNode("Main Group Metals"));
	group_1.classList.add("legend-group-1", "legend-group");
	group_1.appendChild(document.createTextNode("Transition Metals"));
	group_2.classList.add("legend-group-2", "legend-group");
	group_2.appendChild(document.createTextNode("Metalloids"));
	group_3.classList.add("legend-group-3", "legend-group");
	group_3.appendChild(document.createTextNode("Nonmetals"));
	legend.appendChild(group_0);
	legend.appendChild(group_1);
	legend.appendChild(group_2);
	legend.appendChild(group_3);
	body.appendChild(legend);
}

function showInfo(evt) {
	var body = document.getElementById("app_body").firstElementChild, elem = evt.target, data, color, left, top;
	if (pdtInfo) body.removeChild(pdtInfo);
	if (!elem.classList.contains("spell-elem")) while (!elem.classList.contains("pdt-cell")) elem = elem.parentNode;
	left = (document.getElementById("app_body").scrollLeft / 6) + elem.offsetLeft + (elem.clientWidth / 2);
	top = (document.getElementById("app_body").scrollTop / 6) + elem.offsetTop + (elem.clientHeight / 2);
	console.log(left)
	console.log(body.scrollWidth)
	if (left + 118 >= body.scrollWidth) left = body.scrollWidth - 128;
	else if (left <= 118) left = 128;
	if (top <= 108) top = 108;
	else if (top + 118 >= body.scrollHeight) top = body.scrollHeight - 100;
	color = window.getComputedStyle(elem).getPropertyValue("background-color");
	data = elem.getAttribute("data").split("|");
	var info = document.createElement("div"), title = document.createElement("span"), icon = document.createElement("div"), 
		content = document.createElement("div"), aw_type = document.createElement("span"), aw_val = document.createElement("span"),
		an_type = document.createElement("span"), an_val = document.createElement("span"), btn = document.createElement("div"), wiki = document.createElement("div");
	info.classList.add("pdt-info");
	info.style.width = elem.clientWidth + "px";
	info.style.height = elem.clientHeight + "px";
	info.style.left = left + "px";
	info.style.top = top + "px";
	title.style.color = color;
	title.classList.add("pdt-info-title");
	title.appendChild(document.createTextNode(data[1]));
	icon.classList.add("pdt-info-icon");
	icon.innerHTML = "<svg fill='" + color + "' width='48' height='48'><use xlink:href='#atom' width='48' height='48'/></svg>";
	content.classList.add("pdt-info-body");
	aw_type.classList.add("pdt-info-type");
	aw_type.appendChild(document.createTextNode("Atomic Weight:"));
	aw_val.classList.add("pdt-info-val");
	aw_val.appendChild(document.createTextNode(data[2]));
	an_type.classList.add("pdt-info-type");
	an_type.appendChild(document.createTextNode("Atomic Number:"));
	an_val.classList.add("pdt-info-val");
	an_val.appendChild(document.createTextNode(data[3]));
	btn.classList.add("pdt-info-btn");
	btn.appendChild(document.createTextNode("VISUALIZE"));
	btn.style.backgroundColor = color;
	btn.addEventListener("click", function() {
		var atomicNum = parseInt(pdtInfo.children[2].children[4].firstChild.nodeValue);
		closeApp();
		setTimeout(function() {
			document.getElementById("go_vis").click();
			setParticles('e', atomicNum);
			setParticles('p', atomicNum);
		}, 300);
	});
	addRipplesTo(btn);
	wiki.classList.add("pdt-info-btn", "pdt-info-wiki");
	wiki.appendChild(document.createTextNode("WIKI"));
	wiki.style.backgroundColor = color;
	wiki.addEventListener("click", () => window.open("https://en.wikipedia.org/wiki/" + data[1]));
	addRipplesTo(wiki);
	content.appendChild(aw_type);
	content.appendChild(aw_val);
	content.appendChild(document.createElement("br"));
	content.appendChild(an_type);
	content.appendChild(an_val);
	content.appendChild(btn);
	content.appendChild(wiki);
	info.appendChild(icon);
	info.appendChild(title);
	info.appendChild(content);
	body.appendChild(info);
	pdtInfo = info;
	setTimeout(() => info.classList.add("info-open"), 30);
}

function addRipplesTo(elem) {
	elem.addEventListener("mousedown", createRipple);
	elem.addEventListener("mouseup", removeRipple);
	elem.addEventListener("mouseout", () => endRipples(true));
}

function createRipple(event) {
	var container, ripple = document.createElement("div"), ref = elemPressed ? document.getElementById(elemPressed.id) : true, 
		style, color, bgcolor;
	if (!elemPressed || elemPressed != event.target || ref) {
		if (elemPressed && ref) elemPressed.removeChild(document.getElementById("_ripple-container"));
		container = document.createElement("div");
		elemPressed = event.target;
		container.classList.add("-ripple-container");
		container.id = "_ripple-container";
		elemPressed.appendChild(container);
	} else container = document.getElementById("_ripple-container");
	style = window.getComputedStyle(elemPressed);
	color = style.getPropertyValue("color");
	bgcolor = style.getPropertyValue("background-color");
	bgcolor = bgcolor.substring(0, bgcolor.length - 1).split("(")[1].split(",");
	if (color !== "rgb(0, 0, 0)") ripple.style.backgroundColor = color;
	if (+bgcolor[0] + +bgcolor[1] + +bgcolor[2] > 500 && !(bgcolor.length > 3 && +bgcolor[3] < .3)) ripple.classList.add("-ripple-dark");
	ripple.classList.add("-ripple-item");
	ripple.style.left = event.offsetX + "px";
	ripple.style.top = event.offsetY + "px";
	container.appendChild(ripple);
	currRipple = ripple;
	setTimeout(() => ripple.classList.add("-ripple-visible"), 0);
}

function removeRipple() {
	var rip = currRipple, cont = document.getElementById("_ripple-container");
	if (rip) setTimeout(function() {
		rip.classList.add("-ripple-fade");
		setTimeout(function() {
			if (cont && cont.contains(rip)) cont.removeChild(rip);
			if (!removeCountdown) endRipples();
		}, 300);
	}, 200);
}

function endRipples(confirm) {
	var cont = document.getElementById("_ripple-container");
	if (elemPressed && document.getElementById(elemPressed.id)) {
		if (confirm) {
			removeRipple();
			setTimeout(endRipples, 300);
		} else if (cont && cont.childElementCount === 0) {
			elemPressed.removeChild(cont);
			elemPressed = undefined;
			clearTimeout(removeCountdown);
			removeCountdown = undefined;
		} else removeCountdown = setTimeout(endRipples, 20);
	}
}