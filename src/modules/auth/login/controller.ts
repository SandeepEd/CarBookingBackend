export class LogInController {
    constructor(private logInUseCase: any) { }

    async handle(req: any, res: any) {
        const { email, password } = req.body;
        try {
            const result = await this.logInUseCase.execute({ email, password });
            if (result) {
                res.status(200).json({
                    message: "Successfully logged in",
                    data: result
                });
            }
        } catch (error: any) {
            res.status(400).json({
                message: "Failed to log in",
                error: error.message
            });
        }
    }
}