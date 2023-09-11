Lottery API:

- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Get all ticket
- Get ticket by Id
- Bulk buy (User can buy multiple ticket at a time)
- Raffle draw



Ticket:

- number(unique)
- username
- price
- timestamp



Routes:

- /tickets/t/:ticketId GET - find single ticket
- /tickets/t/:ticketId PATCH - update single ticket by id
- /tickets/t/:ticketId DELETE - delete ticket by id
- /tickets/u/:username GET - find ticket for a given username
- /tickets/u/:username PATCH - update ticket for a given username
- /tickets/u/:username DELETE - delete all ticket for a given username
- /tickets/sell -  create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw
- /tickets - find all tickets