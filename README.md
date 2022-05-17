# Rocket-Elevators-Mobile-React-Native

The ".expo" folder is created when an Expo project is started using "expo start" command.

## Liste des endpoints:

Here are the endpoints available to test my android application:
`GET /api/employees/email/{email} : retrieve an employee with the email , return alert if it founds nothing or the email is false.`

`GET /api/Elevators : list of all elevators with status`

`PUT /api/elevators/update/active/{id} : allows to change the status of the selected elevator`
with raw :
{
"id": {id},
"status": "status",
"column_id": {id}
}
and a [{"key":"Content-Type","value":"application/json"}] in Headers

## URL of the api deployed

https://rocketelevator.me/api

## Link to a video description
