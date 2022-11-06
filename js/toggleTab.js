//забираем коллекцию tabsBtn
const tabsBtn = document.querySelectorAll(".tab__bike");
//забираем коллекцию tabsItem
const tabsItem = document.querySelectorAll(".card__product");

//запуск функции переключения
tabsBtn.forEach(toggleTab);

//функция переключения tabs
function toggleTab(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      //удаляем у всех кнопок класс 'active'
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      //удаляем у всех tab класс 'active'
      tabsItem.forEach(function (item) {
        item.classList.remove("active__tab");
      });

      //выдаем конректной кнопке класс 'active'
      currentBtn.classList.add("active");
      //выдаем конректному tab класс 'active__tab'
      currentTab.classList.add("active__tab");
    }
  });
}

document.querySelector(".tab__bike").click();
