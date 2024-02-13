import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6361259816:AAEk8EKjXiS2I9T4nvKtVDRYe1h2IVEg-jA';
const webAppUrl = 'https://crwn-learning.web.app/'

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press any button below!',
        Markup.keyboard([Markup.button.webApp(
            'Open app',
            webAppUrl
        ),
        Markup.button.webApp(
            'Open Feedback page',
            webAppUrl + 'feedback'
        )])
    );
});

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Thanks for your message: ${data?.feedback}` ?? 'Empty message');
})

bot.launch();