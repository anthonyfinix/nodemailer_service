
export interface mailer {
    host: string,
    port: number,
    secure: boolean,
    auth?: {
        user: string,
        pass: string,
    },
}
export interface IConfig {
    env: string
    port: number,
    default_user_verification_state: boolean,
    default_user_role: string,
    mongoURI: string,
    mongooseOptions: {
        useNewUrlParser: boolean,
        useUnifiedTopology: boolean,
        useFindAndModify: boolean
    },
    express: {
        default_url_encoding_extended: boolean
    },
    amqplibURL: string,
    mailers: any

}
class Configuration implements IConfig {
    env: string = "development";
    port: number = 3000;
    default_user_verification_state: boolean = false;
    default_user_role: string = "admin";
    mongoURI: string = "http://localhost:27017";
    mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
    express = {
        default_url_encoding_extended: true
    }
    // mailers = [{
    //     host:process.env.MAILER_HOST,
    //     port:process.env.MAILER_PORT,
    //     secure:process.env.MAILER_ISSECURE,
    //     auth:{
    //         user:process.env.MAILER_USER,
    //         pass:process.env.MAILER_PASS
    //     }
    // }]
    mailers = [{
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "anthonyfinix@gmail.com",
            pass: 'BIc3yYX!749u'
        }
    }]
    amqplibURL: string =process.env.AMQPLIB_URL || "amqps://localhost"
    setConfiguration(options: IConfig) {
        if (options.amqplibURL) this.amqplibURL = options.amqplibURL;
        if (options.mongoURI) this.mongoURI = options.mongoURI;
        if (options.port) this.port = options.port;
        if (options.env) this.env = options.env;
    }

}

let configuration = new Configuration();
export default configuration;