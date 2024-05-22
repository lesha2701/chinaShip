// document.addEventListener('DOMContentLoaded', function() {
//     const weightInput = document.getElementById('weight');
//     const volumeInput = document.getElementById('volume');
//     const priceInput = document.getElementById('price');
//     const calculateButton = document.querySelector('.calculator__form-button');

//     // Функция для обновления стоимости доставки
//     function updateShippingCost() {
//         const weight = parseFloat(weightInput.value.replace(',', '.'));
//         const volume = parseFloat(volumeInput.value.replace(',', '.'));
//         const price = parseFloat(priceInput.value) * 13.52;

//         // Ваша логика расчета стоимости доставки, например:
//         const shippingCost = weight * 0.5 + volume * 0.2 + (price + (price * 5) / 100) ;
//         console.log('Стоимость доставки:', shippingCost);
//     }

//     function handleButtonClick(event) {
//         const target = event.target;
//         const input = target.parentElement.querySelector('.calculator__form-input');
//         console.log(input.value)
//         const value = parseFloat(input.value);

//         if (target.textContent === '-' && value > 0) {
//             input.value = (value - 1).toFixed(1); // Уменьшаем значение на 1
//         } else if (target.textContent === '+') {
//             input.value = (value + 1).toFixed(1); // Увеличиваем значение на 1
//         }

//         // updateShippingCost(); // Обновляем стоимость доставки при изменении значений
//     }

//     // Обработчики событий для кнопок + и -
//     const buttons = document.querySelectorAll('.calculator__form-btn');
//     buttons.forEach(function(button) {
//         button.addEventListener('click', handleButtonClick);
//     });

//     // Обработчик события для кнопки "Рассчитать"
//     calculateButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Предотвращаем отправку формы
//         updateShippingCost(); // Вызываем функцию расчета стоимости доставки
//     });
// });

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// document.getElementById("open-modal-btn").addEventListener("click", function() {
//   document.getElementById("my-modal").classList.add("open")
// })

document.getElementById("open-modal-btn1").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("open-modal-btn2").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("open-modal-btn3").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("open-modal-btn4").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("open-modal-btn5").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});