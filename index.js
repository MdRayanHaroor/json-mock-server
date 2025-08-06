const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const data = {
  pesticideApplications: [
    {
      FarmID: "F001",
      PesticideType: "Chlorpyrifos",
      ApplicationDate: "2024-03-15",
      QuantityApplied_Lbs: 50,
      ApplicationMethod: "Spraying"
    },
    {
      FarmID: "F002",
      PesticideType: "Mancozeb",
      ApplicationDate: "2024-03-18",
      QuantityApplied_Lbs: 35,
      ApplicationMethod: "Soil Drench"
    },
    {
      FarmID: "F001",
      PesticideType: "Mancozeb",
      ApplicationDate: "2024-04-01",
      QuantityApplied_Lbs: 40,
      ApplicationMethod: "Spraying"
    },
    {
      FarmID: "F003",
      PesticideType: "Chlorpyrifos",
      ApplicationDate: "2024-03-20",
      QuantityApplied_Lbs: 60,
      ApplicationMethod: "Spraying"
    },
    {
      FarmID: "F002",
      PesticideType: "Chlorpyrifos",
      ApplicationDate: "2024-04-05",
      QuantityApplied_Lbs: 25,
      ApplicationMethod: "Spraying"
    },
    {
      FarmID: "F004",
      PesticideType: "Mancozeb",
      ApplicationDate: "2024-03-25",
      QuantityApplied_Lbs: 45,
      ApplicationMethod: "Soil Drench"
    }
  ]
}

const router = jsonServer.router(data)

server.use(middlewares)
server.use(router)

module.exports = server
