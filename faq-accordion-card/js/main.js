const faqItem = document.querySelectorAll("#faq-item");

console.log(faqItem);

faqItem.forEach((element) => {
	const question = element.firstElementChild;
	question.addEventListener("click", () => {
		element.classList.toggle("answer--hide");
	});
});
