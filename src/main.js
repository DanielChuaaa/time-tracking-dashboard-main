let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const cureentTime = document.querySelectorAll(".cureentTime");
const previousTime = document.querySelectorAll(".previousTime");

daily.addEventListener("click", dailyClicked);
weekly.addEventListener("click", weeklyClicked);
monthly.addEventListener("click", monthlyClicked);

function dailyClicked(event) {
  const clickedElement = event.target;

  if (!clickedElement.classList.contains("nav-active")) {
    weekly.classList.remove("nav-active");
    monthly.classList.remove("nav-active");
  }
  daily.classList.add("nav-active");

  cureentTime.forEach((time, index) => {
    time.textContent = `${data[index].timeframes.daily.current} hrs`;
  });

  previousTime.forEach((time, index) => {
    time.textContent = `${data[index].timeframes.daily.previous} hrs`;
  });
}

function weeklyClicked() {
  if (!weekly.classList.contains("nav-active")) {
    weekly.classList.add("nav-active");
  }
  daily.classList.remove("nav-active");
  monthly.classList.remove("nav-active");

  cureentTime.forEach((time, index) => {
    time.textContent = `${data[index].timeframes.weekly.current} hrs`;
  });

  previousTime.forEach((time, index) => {
    time.textContent = `${data[index].timeframes.weekly.previous} hrs`;
  });
}

function monthlyClicked() {
  if (!monthly.classList.contains("nav-active")) {
    monthly.classList.add("nav-active");
  }
  daily.classList.remove("nav-active");
  weekly.classList.remove("nav-active");

  cureentTime.forEach((time, index) => {
    time.textContent = `${data[index].timeframes.monthly.current} hrs`;

    previousTime.forEach((time, index) => {
      time.textContent = `${data[index].timeframes.monthly.previous} hrs`;
    });
  });
}
