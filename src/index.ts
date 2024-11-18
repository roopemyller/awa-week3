import {Request, Response, Router} from "express"

const router: Router = Router()

type TUser = {
    name: string;
    email: string;
}

let users: TUser[] = []

router.get("/", (req: Request, res: Response) => {
    res.json(users)
})

router.post("/users", (req, res) => {
    const {name, email} = req.body
    const newUser: TUser = {name, email}
    users.push(newUser)
    res.json({message: "User successfully added"})
})

router.get('/hello', (req, res) => {
    res.json({msg: "Hello world!"})
})

router.get('/echo/:id', (req, res) => {
    let id: string = req.params.id
    res.json({id: `${id}`})
})

router.post('/sum', (req, res) => {
    const nums: number[] = req.body.numbers

    let sum: number = 0
    for (const num of nums) {
        sum += num
    }

    res.json({sum})
})


export default router