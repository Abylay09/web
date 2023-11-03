export interface IPosts {
    name: string
    time: string
    text: string
    likes: number,
    dislikes: number
    id: number
}

export const posts : IPosts[] = [
    {
      name: "Alice",
      time: "2023-10-15T14:30:00",
      text: "Прекрасный день!",
      likes: 25,
      dislikes: 3,
      id:1
    },
    {
      name: "Bob",
      time: "2023-10-14T18:45:00",
      text: "Пошел гулять в парк.",
      likes: 15,
      dislikes: 2,
      id:2
    },
    {
      name: "Charlie",
      time: "2023-10-13T09:20:00",
      text: "Учусь программировать.",
      likes: 30,
      dislikes: 5,
      id:3
    },
    {
      name: "David",
      time: "2023-10-12T21:15:00",
      text: "Смотрю новый фильм.",
      likes: 12,
      dislikes: 1,
      id:4
    },
    {
      name: "Emma",
      time: "2023-10-11T12:55:00",
      text: "Путешествую по Европе.",
      likes: 42,
      dislikes: 7,
      id:5
    },
    {
      name: "Frank",
      time: "2023-10-10T17:10:00",
      text: "Читаю книгу.",
      likes: 8,
      dislikes: 0,
      id:6
    },
    {
      name: "Grace",
      time: "2023-10-09T10:05:00",
      text: "Сегодня день рождения!",
      likes: 55,
      dislikes: 2,
      id:7
    },
    {
      name: "Helen",
      time: "2023-10-08T15:40:00",
      text: "Пишу свою первую программу.",
      likes: 38,
      dislikes: 4,
      id: 8
    },
    {
      name: "Isaac",
      time: "2023-10-07T19:25:00",
      text: "Собираюсь на встречу с друзьями.",
      likes: 20,
      dislikes: 3,
      id: 9
    },
    {
      name: "Jack",
      time: "2023-10-06T08:50:00",
      text: "Смотрю спортивное соревнование.",
      likes: 18,
      dislikes: 6,
      id: 10
    }
  ];

  export const myUserPosts : IPosts[] = [
    {
      name: "John",
      time: "2023-10-15T14:30:00",
      text: "Прекрасный день!",
      likes: 25,
      dislikes: 3,
      id:1
    },
    {
      name: "John",
      time: "2023-10-14T18:45:00",
      text: "Пошел гулять в парк.",
      likes: 15,
      dislikes: 2,
      id:2
    },
    {
      name: "John",
      time: "2023-10-13T09:20:00",
      text: "Учусь программировать.",
      likes: 30,
      dislikes: 5,
      id:3
    },
  ]