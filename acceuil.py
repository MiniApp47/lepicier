import logging
import os
from pathlib import Path  
from dotenv import load_dotenv  
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes, MessageHandler, filters

# --- CONFIGURATION ---

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(os.path.join(BASE_DIR, ".env"))

TOKEN = os.getenv("TOKEN")

if not TOKEN:
    raise ValueError("ERREUR : Le TOKEN n'a pas pu être chargé. Vérifie ton fichier .env")

# Liens L'Épicier
MINI_APP_URL = "https://miniapp47.github.io/lepicier/"
TELEGRAM_CONTACT = "https://t.me/LepicierV3"
POTATO_CONTACT = "https://tutuduanyu.org/lepicierconnection2"



# Chemin vers ton logo (vérifie bien que le nom du fichier est exact sur ton serveur)
LOGO_ACCUEIL = str(BASE_DIR / "Logo.jpg") 

# ------------------------------------

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)

async def post_init(application):
    """Supprime le bouton bleu Menu."""
    await application.bot.delete_my_commands()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Clavier persistant
    menu_keyboard = [[KeyboardButton("🏠 MENU PRINCIPAL")]]
    reply_markup_persistent = ReplyKeyboardMarkup(
        menu_keyboard, 
        resize_keyboard=True, 
        is_persistent=True
    )
    
    await context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="🌴 Bienvenue chez L’Épicier 🌅",
        reply_markup=reply_markup_persistent
    )
    
    # Nouveau Texte d'accueil
    welcome_text = (
        "🌴 <b>BIENVENUE CHEZ L’ÉPICIER</b> 🌅\n\n"
        "Découvrez notre sélection directement dans le catalogue.\n\n"
        "⚡ <i>Service rapide • Qualité • Discrétion</i>\n\n"
        "⏰ <i>Cliquez sur /start pour actualiser le menu </i>\n\n"
        "👇 <b>Accédez à tous nos produits ci-dessous :</b>"
    )

    # Boutons en colonne
    keyboard = [
        [
            InlineKeyboardButton(
                "🛍️ ACCÉDER AU SHOP 🛍️",
                web_app=WebAppInfo(url=MINI_APP_URL),
                style="success"
            )
        ],
        [
            InlineKeyboardButton(
                "✈️ Contact Telegram",
                url=TELEGRAM_CONTACT,
                style="primary"
            )
        ],
        [
            InlineKeyboardButton(
                "🥔 Potato",
                url=POTATO_CONTACT
            )
        ]
    ]

    reply_markup = InlineKeyboardMarkup(keyboard)

    try:
        await update.message.reply_photo(
            photo=LOGO_ACCUEIL,
            caption=welcome_text,
            reply_markup=reply_markup,
            parse_mode='HTML'
        )
    except Exception as e:
        logger.error(f"Erreur photo : {e}")
        await update.message.reply_text(
            welcome_text,
            reply_markup=reply_markup,
            parse_mode='HTML'
        )

def main() -> None:
    application = ApplicationBuilder().token(TOKEN).post_init(post_init).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("menu", start)) 
    application.add_handler(MessageHandler(filters.Text("🏠 MENU PRINCIPAL"), start))
    
    print("Bot L’Épicier démarré... 🌴")
    application.run_polling()

if __name__ == "__main__":
    main()