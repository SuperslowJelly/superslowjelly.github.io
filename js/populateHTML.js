import { default as data } from "../db/db.js";

function populateSkills(items, id) {
	let skillsTag = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h3 = document.createElement("h3");
		h3.innerHTML = items[i].skillName;
		if (items[i].percentage >= 80) h3.innerHTML += " <span style=\"color: #02c39a; float: right; font-size: 12.5px; letter-spacing: 0\">ADVANCED</span>";
		else if (items[i].percentage >= 50) h3.innerHTML += " <span style=\"color: #f9bf3f; float: right; font-size: 12.5px; letter-spacing: 0\">INTERMEDIATE</span>";
		else h3.innerHTML += " <span style=\"color: #2c98f0; float: right; font-size: 12.5px; letter-spacing: 0\">BEGINNER</span>";

		let divProgress = document.createElement("div");
		divProgress.className = "progress";

		let divProgressBar = document.createElement("div");
		divProgressBar.className = "progress-bar color-";
		divProgressBar.style = "width:" + items[i].percentage + "%";
		if (items[i].percentage >= 80) divProgressBar.className += 8;
		else if (items[i].percentage >= 50) divProgressBar.className += 3;
		else divProgressBar.className += 1;
		divProgress.append(divProgressBar);

		let divProgressWrap = document.createElement("div");
		divProgressWrap.className = "progress-wrap";
		divProgressWrap.append(h3);
		divProgressWrap.append(divProgress);

		let divAnimateBox = document.createElement("div");
		divAnimateBox.className = "col-md-6 animate-box";
		divAnimateBox.append(divProgressWrap);

		skillsTag.append(divAnimateBox);
	}
}

// TODO: Collapse into common function.
function populateAwards(items, id) {
	let awarddesign = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h4 = document.createElement("h4");
		h4.className = "project-heading";
		h4.innerHTML = items[i].awardName;

		let a = document.createElement("p");
		a.append(h4);

		let img = document.createElement("img");
		img.src = items[i].image;
		img.className = "img-fluid";

		let divResumeContentLeft = document.createElement("div");
		divResumeContentLeft.className = "resume-content";
		divResumeContentLeft.id = "left-div";
		divResumeContentLeft.append(img);

		let divResumeContentRight = document.createElement("div");
		divResumeContentRight.className = "resume-content";
		divResumeContentRight.id = "right-div";

		let p = document.createElement("p");
		p.className = "project-description";
		p.innerHTML = items[i].summary;

		let divLink = document.createElement("div");
		divLink.className = "project-link";

		let link = document.createElement("a");
		link.innerHTML = items[i].preview;
		link.href = items[i].preview;
		link.target = "_blank";
		divLink.append(link);

		let divSpan = document.createElement("div");
		for (let k = 0; k < items[i].techStack.length; k++) {
			let span = document.createElement("span");
			span.className = "badge badge-secondary";
			span.innerHTML = items[i].techStack[k];
			divSpan.append(span);
		}

		let divSubHeading = document.createElement("div");
		divSubHeading.className = "sub-heading";
		divSubHeading.append(p);
		divSubHeading.append(divLink);
		divSubHeading.append(divSpan);
		divResumeContentRight.append(divSubHeading);

		let divResumeItem = document.createElement("div");
		divResumeItem.className = "resume-item";
		divResumeItem.append(divResumeContentLeft);
		divResumeItem.append(divResumeContentRight);
		a.append(divResumeItem);

		let divProjectCard = document.createElement("div");
		divProjectCard.className = "project-card";
		divProjectCard.append(a);

		let li = document.createElement("li");
		li.append(divProjectCard);
		awarddesign.append(li);
	}
}

function populateGalleries(items, id) {
	let galleriesdesign = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let p = document.createElement("p");

		let h4 = document.createElement("h4");
		h4.className = "project-heading";
		h4.innerHTML = items[i].title;
		p.append(h4);

		let a = document.createElement("a");
		a.className = "thumbnail fancybox";
		a.rel = "lightbox";
		a.href = items[i].image;

		let img = document.createElement("img");
		img.className = "img-responsive";
		img.src = items[i].image;

		a.append(img);
		p.append(a);

		let divProjectCard = document.createElement("div");
		divProjectCard.className = "project-card";
		divProjectCard.append(p);

		let li = document.createElement("li");
		li.append(divProjectCard);
		galleriesdesign.append(li);
	}
}

// TODO: Collapse into common function.
function populateProjects(items, id) {
	let projectdesign = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h4 = document.createElement("h4");
		h4.className = "project-heading";
		h4.innerHTML = items[i].projectName;

		let a = document.createElement("p");
		a.append(h4);

		let img = document.createElement("img");
		img.src = items[i].image;
		img.className = "img-fluid";

		let divResumeContentLeft = document.createElement("div");
		divResumeContentLeft.className = "resume-content";
		divResumeContentLeft.id = "left-div";
		divResumeContentLeft.append(img);

		let divResumeContentRight = document.createElement("div");
		divResumeContentRight.className = "resume-content";
		divResumeContentRight.id = "right-div";

		let p = document.createElement("p");
		p.className = "project-description";
		p.innerHTML = items[i].summary;

		let divLink = document.createElement("div");
		divLink.className = "project-link";

		let link = document.createElement("a");
		link.innerHTML = items[i].preview;
		link.href = items[i].preview;
		link.target = "_blank";
		divLink.append(link);

		let divSpan = document.createElement("div");
		for (let k = 0; k < items[i].techStack.length; k++) {
			let span = document.createElement("span");
			span.className = "badge badge-secondary";
			span.innerHTML = items[i].techStack[k];
			divSpan.append(span);
		}

		let divSubHeading = document.createElement("div");
		divSubHeading.className = "sub-heading";
		divSubHeading.append(p);
		divSubHeading.append(divLink);
		divSubHeading.append(divSpan);
		divResumeContentRight.append(divSubHeading);

		let divResumeItem = document.createElement("div");
		divResumeItem.className = "resume-item";
		divResumeItem.append(divResumeContentLeft);
		divResumeItem.append(divResumeContentRight);
		a.append(divResumeItem);

		let divProjectCard = document.createElement("div");
		divProjectCard.className = "project-card";
		divProjectCard.append(a);

		let li = document.createElement("li");
		li.append(divProjectCard);
		projectdesign.append(li);
	}
}

function populateExp_Edu(items, id) {
	let mainContainer = document.getElementById(id);

	for (let i = 0; i < items.length; i++) {
		let spanTimelineSublabel = document.createElement("span");
		spanTimelineSublabel.className = "timeline-sublabel";
		spanTimelineSublabel.innerHTML = items[i].subtitle;

		let spanh2 = document.createElement("span");
		spanh2.innerHTML = items[i].duration;

		let h2TimelineLabel = document.createElement("h2");
		h2TimelineLabel.innerHTML = items[i].title;
		h2TimelineLabel.append(spanh2);

		let divTimelineLabel = document.createElement("div");
		divTimelineLabel.className = "timeline-label";
		divTimelineLabel.append(h2TimelineLabel);
		divTimelineLabel.append(spanTimelineSublabel);

		for (let j = 0; j < items[i].details.length; j++) {
			let pTimelineText = document.createElement("p");
			pTimelineText.className = "timeline-text";
			pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
			divTimelineLabel.append(pTimelineText);
		}

		let divTags = document.createElement("div");
		for (let j = 0; j < items[i].tags.length; j++) {
			let spanTags = document.createElement("span");
			spanTags.className = "badge badge-secondary";
			spanTags.innerHTML = items[i].tags[j];
			divTags.append(spanTags);
		}
		divTimelineLabel.append(divTags);

		let iFa = document.createElement("i");
		iFa.className = "fa fa-" + items[i].icon;

		let divTimelineIcon = document.createElement("div");
		divTimelineIcon.className = "timeline-icon color-2";
		divTimelineIcon.append(iFa);

		let divTimelineEntryInner = document.createElement("div");
		divTimelineEntryInner.className = "timeline-entry-inner";
		divTimelineEntryInner.append(divTimelineIcon);
		divTimelineEntryInner.append(divTimelineLabel);

		let article = document.createElement("article");
		article.className = "timeline-entry animate-box";
		article.append(divTimelineEntryInner);

		mainContainer.append(article);
	}

	let divTimelineIcon = document.createElement("div");
	divTimelineIcon.className = "timeline-icon color-2";

	let divTimelineEntryInner = document.createElement("div");
	divTimelineEntryInner.className = "timeline-entry-inner";
	divTimelineEntryInner.append(divTimelineIcon);

	let article = document.createElement("article");
	article.className = "timeline-entry begin animate-box";
	article.append(divTimelineEntryInner);

	mainContainer.append(article);
}

function populateLinks(items, id) {
	let footer = document.getElementById(id);

	for (let i = 0; i < items.length; i++) {
		if (items[i].label != "copyright-text") {
			let span = document.createElement("span");
			span.className = "col";

			let p = document.createElement("p");
			p.className = "col-title";
			p.innerHTML = items[i].label;
			span.append(p);

			let nav = document.createElement("nav");
			nav.className = "col-list";

			let ul = document.createElement("ul");
			for (let j = 0; j < items[i].data.length; j++) {
				let li = document.createElement("li");
				let a = document.createElement("a");
				if (items[i].data[j].link) {
					a.href = items[i].data[j].link;
					a.target = "_blank";
				}
				if (items[i].data[j].func) {
					a.setAttribute("onclick", items[i].data[j].func);
				}
				a.innerHTML = items[i].data[j].text;

				li.append(a);
				ul.append(li);
			}
			nav.append(ul);
			span.append(nav);
			footer.append(span);
		}

		if (items[i].label == "copyright-text") {
			let div = document.createElement("div");
			div.className = "copyright-text no-print";
			for (let k = 0; k < items[i].data.length; k++) {
				let p = document.createElement("p");
				p.innerHTML = items[i].data[k];
				div.append(p);
			}
			footer.append(div);
		}
	}
}

populateSkills(data.skills.languages, "skills-languages");
populateSkills(data.skills.engines, "skills-engines");
populateSkills(data.skills.libraries, "skills-libraries");
populateSkills(data.skills.backend, "skills-backend");
populateSkills(data.skills.versionControl, "skills-versioncontrol");
populateSkills(data.skills.environments, "skills-environments");

for (let i = 0; i < data.galleries.length; i++) {
	populateGalleries(data.galleries[i], `gallery${i}`);
}

populateAwards(data.awards.showcase, "showcase-awards");
populateAwards(data.awards.educational, "educational-awards");

populateProjects(data.projects.professional, "professional-projects");
populateProjects(data.projects.personal, "personal-projects");
populateProjects(data.projects.university, "university-projects");

populateExp_Edu(data.experience, "experience");
populateExp_Edu(data.education, "education");

populateLinks(data.footer, "footer");
