const modalBtns = Array.from(document.querySelectorAll(".btn"))
const modalEl = document.querySelector("[data-modal]")
const closeModalBtn = document.querySelector("[data-close-modal]")
const body = document.querySelector("body")

modalBtns.forEach((btn) => btn.addEventListener("click", openModal))
closeModalBtn.addEventListener("click", closeModal)

function openModal() {
	modalEl.classList.add("show")
	disableScroll()
}
function closeModal() {
	modalEl.classList.remove("show")
	enableScroll()
}

function preventScroll(e) {
	e.preventDefault()
	e.stopPropagation()

	return false
}

function enableScroll() {
	body.removeEventListener("wheel", preventScroll, { passive: false })
	body.classList.add("scrollable")
}
function disableScroll() {
	body.addEventListener("wheel", preventScroll, { passive: false })
	body.classList.remove("scrollable")
}
