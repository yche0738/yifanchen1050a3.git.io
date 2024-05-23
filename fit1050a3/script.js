// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}



const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
                                
                                








		document.addEventListener('DOMContentLoaded', (event) => {
			// Modal functionality
			const modal = document.getElementById("myModal");
			const btn = document.getElementById("openModal");
			const span = document.getElementsByClassName("close")[0];
		
			btn.onclick = function() {
				modal.style.display = "block";
			}
		
			span.onclick = function() {
				modal.style.display = "none";
			}
		
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
		
			// Sign In form functionality
			const signinForm = document.getElementById('signinForm'); 
			if (signinForm) {
				signinForm.addEventListener('submit', function(event) {
					event.preventDefault();
					const email = document.getElementById('email').value;
					const password = document.getElementById('password').value;
		
					// Simple validation check
					if (email && password) {
						alert('Sign In successful!\nEmail: ' + email);
						// Here you can add AJAX call to server for actual authentication
					} else {
						alert('Please enter both email and password.');
					}
				});
			}
		});
		