

const checkbox = document.querySelector('label');
const agreeBtn = document.querySelector('.agree-btn');

let time = 300;

const pages = document.querySelectorAll('.page'); //make all pages hidden by default
console.log(pages)
pages.forEach(function (item) {
	item.classList.add('hidden');
});
show(0); //show first page by default



let pageCount = 0;
let laughPageCount = 0;
agreeBtn.addEventListener('click', function () {
	if (document.querySelector('.custom-checkbox').checked) {
		//0 -> 1
		fade(pageCount);
		zoomIn(pageCount)
		nextPage(pageCount);


	}
})

let t, i;



//effects
function fade(id) {
	document.querySelectorAll('.page')[id].style.opacity = '0';
}
function zoomIn(id) {
	document.querySelectorAll('.page')[id].style.transform = 'scale(5)';
}
function zoomIn(id) {
	document.querySelectorAll('.page')[id].style.transform = 'scale(0)';
}
function slideUp(id) {
	document.querySelectorAll('.page')[id].style.top = '-100%';
}
function blur(id) {
	document.querySelectorAll('.page')[id].style.filter = 'blur(10px)';
}
function blurOut(id) {
	document.querySelectorAll('.page')[id].style.filter = 'blur(10px)';
	document.querySelectorAll('.page')[id].style.transform = 'scale(5)';
}
async function laugh(pageID) { //for pages that contain laughs
	let laughString = document.querySelectorAll('.laugh')[pageID - 1].querySelector('.laugh-string')
	let laughCount = window.innerHeight / laughString.clientHeight;
	console.log(laughString.clientHeight)
	let count = 0;
	let laughItemCount = 0;

	t = setTimeout(() => { //next page
		console.log('time out is here')
		if (i) {
			clearInterval(i);
		}
		if (itemInterval) {
			clearInterval(itemInterval)
		}
		fade(pageCount);
		zoomIn(pageCount);
		nextPage(pageCount);


	}, time / 2 * (laughCount + 6))
	console.log('laugh is ' + laughPageCount)
	i = setInterval(() => {


		if (count < laughCount) {
			document.querySelectorAll('.laugh')[pageID - 1].insertAdjacentHTML('beforeend',
				`<div class="laugh-string">
					
				</div>`);
			count++;
			console.log(count);
			laughItemCount = 0;
		}


	}, time)

	let itemInterval = setInterval(() => {
		if (count > laughCount - 7 && laughPageCount == 3) {
			document.querySelectorAll('.laugh')[pageID - 1].querySelectorAll('.laugh-string')[count].insertAdjacentHTML('beforeend',
				`<div class="item">АААААААААА</div>`
			);
		}
		else if (count > 0)
			if (laughItemCount == 0)
				document.querySelectorAll('.laugh')[pageID - 1].querySelectorAll('.laugh-string')[count].insertAdjacentHTML('beforeend',
					`<div class="item">АХ</div>`
				);
			else if (laughItemCount == 1) {
				document.querySelectorAll('.laugh')[pageID - 1].querySelectorAll('.laugh-string')[count].insertAdjacentHTML('beforeend',
					`<div class="item">-ХАХА</div>`
				);
			}
			else if (laughItemCount == 2) {
				document.querySelectorAll('.laugh')[pageID - 1].querySelectorAll('.laugh-string')[count].insertAdjacentHTML('beforeend',
					`<div class="item">-ХАХАХ</div>`
				);
			}
			else if (laughItemCount == 3) {
				document.querySelectorAll('.laugh')[pageID - 1].querySelectorAll('.laugh-string')[count].insertAdjacentHTML('beforeend',
					`<div class="item">-ХАХАХАХ</div>`
				);
			}
		laughItemCount++;
	}, time / 4);
}





function nextPage(id) {
	pageCount++;
	show(pageCount);
	t = setTimeout(() => {
		document.querySelectorAll('.page')[id].classList.add('hidden');
		//here we will check page id

		switch (id) {
			case 0:
				laughPageCount++;
				laugh(laughPageCount);
				break;
			case 1:

				let t01sec = setTimeout(() => {
					document.querySelector('.d01').style.left = 0;
					document.querySelector('.d01').style.opacity = '1';
				},
					time * 2);
				let t02sec = setTimeout(() => {
					document.querySelector('.d02').style.left = 0;
					document.querySelector('.d02').style.opacity = '1';
				},
					time * 5);
				let t03sec = setTimeout(() => {
					document.querySelector('.d03').style.left = 0;
					document.querySelector('.d03').style.opacity = '1';
				},
					time * 8);
				let t04sec = setTimeout(() => {
					document.querySelector('.d04').style.bottom = 0;
					document.querySelector('.d04').style.opacity = '1';
				},
					time * 14);
				let nextPageT = setTimeout(() => {
					console.log('test')
					fade(pageCount);
					nextPage(pageCount);
				}, time * 18)
				break;
			case 2:
				//document.querySelectorAll('.laugh')[1].style.opacity = '';
				//document.querySelectorAll('.laugh')[1].style.transform = '';
				laughPageCount++;
				laugh(laughPageCount);
				//console.log(document.querySelectorAll('.laugh')[1].querySelector('.laugh-string').clientHeight)
				break;
			case 3:
				//document.querySelectorAll('.laugh')[1].classList.add('hidden')
				let container = document.querySelector('.devil');
				const birthdayDs = document.querySelectorAll('.birthday .d');
				birthdayDs.forEach(function (item) {
					let string = item.textContent;
					item.style.letterSpacing =
						(container.clientWidth - item.getBoundingClientRect().width) /
						(string.length - 1) + 'px';
					item.style.display = 'block';
				});

				let tTitle = setTimeout(() => {
					document.querySelector('.birthday .title').style.top = 0;
					document.querySelector('.birthday .title').style.opacity = '1';
				}, time * 3);
				//
				let t01third = setTimeout(() => {
					document.querySelector('.birthday .d01').style.left = `0`;
					document.querySelector('.birthday .d01').style.opacity = '1';
				}, time * 8);
				let t02third = setTimeout(() => {
					document.querySelector('.birthday .d02').style.left = `0 `;
					document.querySelector('.birthday .d02').style.opacity = '1';
				}, time * 12);
				let t03third = setTimeout(() => {
					document.querySelector('.birthday .d03').style.left = `0 `;
					document.querySelector('.birthday .d03').style.opacity = '1';
				}, time * 16);
				let t04third = setTimeout(() => {
					document.querySelector('.birthday .d04').style.left = `0 `;
					document.querySelector('.birthday .d04').style.opacity = '1';
				}, time * 20);

				let tmain = setTimeout(() => {
					document.querySelector('.birthday .main').style.bottom = '-100px ';
					document.querySelector('.birthday .main').style.opacity = '1';
				}, time * 26);
				let nextPageTthird = setTimeout(() => {
					//console.log('test')
					fade(pageCount);
					slideUp(pageCount);
					//zoomIn(pageCount);
					nextPage(pageCount);
				}, time * 34)


				break;
			case 4: //document page
				console.log('document');
				const documentDs = document.querySelectorAll('.document .d');
				let t01 = setTimeout(() => {
					documentDs[0].style.opacity = 1;
				}, time * 3);
				let t02 = setTimeout(() => {
					documentDs[1].style.opacity = 1;
				}, time * 16);
				let t03 = setTimeout(() => {
					documentDs[2].style.opacity = 1;
				}, time * 19);
				let t04 = setTimeout(() => {
					documentDs[3].style.opacity = 1;
				}, time * 24);
				let t05 = setTimeout(() => {
					documentDs[4].style.opacity = 1;
					documentDs[4].style.left = 0;
				}, time * 29);
				let t06 = setTimeout(() => {
					documentDs[5].style.opacity = 1;
					documentDs[5].style.left = 0;
				}, time * 31);
				let tNewPage = setTimeout(() => {
					fade(pageCount);
					slideUp(pageCount);
					nextPage(pageCount);
				}, time * 38)
				break;
			case 5:
				console.log('before-land');
				beforeLandDs = document.querySelectorAll('.before-land .d');
				let tBL01 = setTimeout(() => {
					beforeLandDs[0].style.opacity = 1;
				}, time * 3);
				let ttBL02 = setTimeout(() => {
					beforeLandDs[1].style.opacity = 1;
				}, time * 8);
				let ttBL03 = setTimeout(() => {
					beforeLandDs[2].style.opacity = 1;
				}, time * 13);
				let ttBL04 = setTimeout(() => {
					beforeLandDs[3].style.opacity = 1;
				}, time * 18);
				let ttBL05 = setTimeout(() => {
					beforeLandDs[4].style.opacity = 1;
				}, time * 25);
				let ttBL06 = setTimeout(() => {
					beforeLandDs[5].style.opacity = 1;
				}, time * 30);
				let ttBL07 = setTimeout(() => {
					beforeLandDs[6].style.opacity = 1;
					beforeLandDs[6].style.left = 0;
				}, time * 35);
				let ttBL07Span = setTimeout(() => {
					beforeLandDs[6].querySelector('span').style.color = '#FFB990';
				}, time * 40);
				let tNextPage = setTimeout(() => {
					fade(pageCount);
					slideUp(pageCount);
					nextPage(pageCount);
				}, time * 48);
				break;
			case 6:
				console.log('land')

				const landingComponents = document.querySelectorAll('.landing__section')
				landingComponents[0].style.opacity = 1;
				document.querySelector('.landing').addEventListener('scroll', function (e) {

					landingComponents.forEach(function (item) {
						if (onScreen(item)) {
							item.style.opacity = 1;
						}
						console.log(window.pageYOffset)

					})
				})
				break;
			case 7:
				let t01BeforeEnd = setTimeout(() => {
					document.querySelector('.before-end .d01').style.left = 0;
					document.querySelector('.before-end .d01').style.opacity = 1;
				}, time * 3);
				let t02BeforeEnd = setTimeout(() => {
					document.querySelector('.before-end .d02').style.left = 0;
					document.querySelector('.before-end .d02').style.opacity = 1;
				}, time * 8);
				let t03BeforeEnd = setTimeout(() => {
					document.querySelector('.before-end .d03').style.left = 0;
					document.querySelector('.before-end .d03').style.opacity = 1;
				}, time * 13);
				let t04BeforeEnd = setTimeout(() => {
					fade(pageCount);
					nextPage(pageCount);
				}, time * 20);
				break;
			case 8:
				laughPageCount++;
				laugh(laughPageCount);

				break;
			case 9:
				let t01Parrot = setTimeout(() => {
					document.querySelector('.parrot .d01').style.opacity = 1;
				}, time * 3)
				let t02Parrot = setTimeout(() => {
					document.querySelector('.parrot .d02').style.opacity = 1;
				}, time * 10)
				let t03Parrot = setTimeout(() => {
					document.querySelector('.parrot .d03').style.opacity = 1;
				}, time * 17)
				let t04Parrot = setTimeout(() => {
					fade(pageCount);
					slideUp(pageCount);
					nextPage(pageCount);
				}, time * 24)
				break;
			case 10:
				let t01Finish = setTimeout(() => {
					document.querySelector('.message .title').style.opacity = 1;
				}, time * 3)
				let t02Finish = setTimeout(() => {
					document.querySelector('.message .text').style.opacity = 1;
				}, time * 10);
				break;
		}
	}, time * 3)
}
const landingBtn = document.querySelector('.button-land');
landingBtn.addEventListener('click', function () {
	fade(pageCount);
	blur(pageCount);
	nextPage(pageCount);
})


function onScreen(el) { //if the element is on the screen
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	);
}

function show(id) { //show specific page
	console.log('id is ', id)
	console.log(pages[id])
	pages[id].classList.remove('hidden');
}


