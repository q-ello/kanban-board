Канбан доска, реализованная на React Typescript

![image](https://github.com/q-ello/kanban-board/assets/116018445/a1e31f56-0fbe-4227-9021-d1ed51aefd26)

Доска имеет 4 блока с задачами:
- Backlog (задачи, которые требуют уточнения перед тем, как брать их в работу);
- Ready (задачи, которые могут быть взяты в работу);
- In progress (задачи, которые уже в работе);
- Finished (законченные задачи).

Все задачи сохраняются в localStorage и переиспользуются в приложении с помощью useContext.

![image](https://github.com/q-ello/kanban-board/assets/116018445/6568d104-8fc9-4dac-9a8f-fac2a85c1cf6)
![image](https://github.com/q-ello/kanban-board/assets/116018445/97143543-1cc7-4474-b0e1-1ee8d2e6c4dc)
При нажатие кнопки Add Card в Backlog появляется инпут для ввода названия новой задачи, а сама кнопка меняется на Submit. 
![image](https://github.com/q-ello/kanban-board/assets/116018445/50bfc049-4016-47fb-a6e5-d4b942b882ae)
![image](https://github.com/q-ello/kanban-board/assets/116018445/e2595778-bc44-468f-8fa5-f489518a4b01)
Кнопка неактивна, пока в инпуте не появится какое-либо значение. При нажатии в другое место и пустом инпуте инпут исчезает.

![image](https://github.com/q-ello/kanban-board/assets/116018445/72f0a450-934c-4fec-885b-ba0edf3ce233)
![image](https://github.com/q-ello/kanban-board/assets/116018445/79fe9c9e-b550-42df-bfb0-4e14b25bd3a6)
Задачи можно перемещать между списками по мере их выполнения, от левого к правому. Кнопка добавления здесь также недоступна, если ничего не выбрано.

![image](https://github.com/q-ello/kanban-board/assets/116018445/716b164c-e394-47a5-aa9d-9e30f7274371)
Если предыдущий список пустой и перемещать нечего, кнопка перестаёт быть активной.

Все изменения сохраняются.

![image](https://github.com/q-ello/kanban-board/assets/116018445/2c623004-79f9-49c9-8d32-51e7d83e397a)
У каждой задачи есть своя собственная страница с деталями, в которой можно менять её описание. При нажатии на крестик в правом верхнем углу приложение возвращается на начальную страницу, сохраняя изменения, если они есть.

![image](https://github.com/q-ello/kanban-board/assets/116018445/c4159002-d231-43c9-b7c5-c54ea2bc934c)
В футере отображается количество задач в Backlog и Finished.
