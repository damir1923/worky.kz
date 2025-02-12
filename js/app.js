// Инициализация графиков
document.addEventListener('DOMContentLoaded', function () {
    // График востребованности профессий на 2024 год
    const demandCtx = document.getElementById('demandChart').getContext('2d');
    new Chart(demandCtx, {
        type: 'bar',
        data: {
            labels: [
                "Учителя общ. наук",
                "Воспитатели ДО",
                "Мед. персонал",
                "Учителя нач. кл.",
                "Работники ухода",
                "Учителя ест. наук",
                "Учителя математики",
                "Бухгалтеры",
                "Повара",
                "Препод. спец. обр."
            ],
            datasets: [{
                label: 'Количество вакансий',
                data: [31000, 27000, 23000, 20000, 19000, 17000, 16000, 15000, 13000, 12000],
                backgroundColor: 'rgba(64, 224, 208, 0.5)',
                borderColor: 'rgba(64, 224, 208, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Востребованность профессий в Казахстане в 2024 году'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // График средних зарплат (данные отсутствуют, примерные значения)
    const salaryCtx = document.getElementById('salaryChart').getContext('2d');
    new Chart(salaryCtx, {
        type: 'line',
        data: {
            labels: [
                "Учителя общ. наук",
                "Воспитатели ДО",
                "Мед. персонал",
                "Учителя нач. кл.",
                "Работники ухода",
                "Учителя ест. наук",
                "Учителя математики",
                "Бухгалтеры",
                "Повара",
                "Препод. спец. обр."
            ],
            datasets: [{
                label: 'Средняя зарплата (тыс. тенге)',
                data: [
                    200, // Примерная зарплата для учителей общественных наук
                    150, // Примерная зарплата для воспитателей
                    180, // Примерная зарплата для мед. персонала
                    200, // Примерная зарплата для учителей начальной школы
                    140, // Примерная зарплата для работников по уходу
                    220, // Примерная зарплата для учителей естественных наук
                    220, // Примерная зарплата для учителей математики
                    250, // Примерная зарплата для бухгалтеров
                    160, // Примерная зарплата для поваров
                    170  // Примерная зарплата для преподавателей спец. образования
                ],
                fill: true,
                backgroundColor: 'rgba(65, 105, 225, 0.2)',
                borderColor: 'rgba(65, 105, 225, 1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Уровень заработной платы по профессиям в Казахстане'
                }
            }
        }
    });

    // График наименее востребованных профессий
    const lowDemandCtx = document.getElementById('lowDemandChart').getContext('2d');
    new Chart(lowDemandCtx, {
        type: 'horizontalBar',
        data: {
            labels: [
                "Юристы",
                "Учителя физ-ры",
                "Учителя нач. классов",
                "Соц. работники",
                "Повара",
                "Техники-прогр.",
                "Делопроизвод.",
                "Экономисты",
                "Парикмахеры",
                "Финансисты"
            ],
            datasets: [{
                label: 'Количество резюме',
                data: [846, 425, 442, 2400, 2000, 1500, 1500, 1200, 1200, 1200],
                backgroundColor: 'rgba(240, 128, 128, 0.8)',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Количество резюме',
                        fontSize: 14
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 12
                    }
                }]
            },
            title: {
                display: true,
                text: 'Наименее востребованные профессии',
                fontSize: 16,
                padding: 20
            }
        }
    });

    // График востребованных профессий
    const highDemandCtx = document.getElementById('highDemandChart').getContext('2d');
    new Chart(highDemandCtx, {
        type: 'horizontalBar',
        data: {
            labels: [
                "Бухгалтеры",
                "Охранники",
                "Продавцы",
                "Учителя общ.",
                "Водители",
                "Мед. персонал",
                "Учителя ест. наук",
                "Воспитатели",
                "Уборщики",
                "Учителя нач. кл."
            ],
            datasets: [{
                label: 'Количество вакансий',
                data: [92000, 77800, 70200, 45200, 45100, 40000, 37900, 36100, 34600, 32300],
                backgroundColor: 'rgba(135, 206, 235, 0.8)',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Количество вакансий',
                        fontSize: 14
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 12
                    }
                }]
            },
            title: {
                display: true,
                text: 'Востребованные профессии',
                fontSize: 16,
                padding: 20
            }
        }
    });

    // Обработчики событий для симуляций
    document.querySelectorAll('.profession-card button').forEach(button => {
        button.addEventListener('click', function (e) {
            const profession = e.target.closest('.profession-card').querySelector('h3').textContent;
            startSimulation(profession);
        });
    });

    // Обработчики для кнопок симуляции
    document.querySelectorAll('.profession-card button').forEach(button => {
        button.addEventListener('click', function (e) {
            const profession = this.dataset.profession;
            const description = this.dataset.description;
            openModal(profession, description);
        });
    });

    // Закрытие модального окна при клике вне его
    document.getElementById('professionModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
});

// Функция запуска симуляции
function startSimulation(profession) {
    // В реальном приложении здесь будет логика загрузки и запуска симуляции
    console.log(`Запуск симуляции для профессии: ${profession}`);
}

// Функции для работы с модальным окном
function openModal(profession, description) {
    const modal = document.getElementById('professionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = profession;
    modalDescription.textContent = description;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('professionModal');
    modal.classList.remove('active');
}

function openSimulation(platform) {
    const profession = document.getElementById('modalTitle').textContent;
    if (platform === 'roblox') {
        alert(`Запуск симуляции "${profession}" в Roblox... Пожалуйста, подождите.`);
    }
    closeModal();
}

// Функция для анимации элементов при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.profession-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Добавляем слушатель события скролла
window.addEventListener('scroll', animateOnScroll);