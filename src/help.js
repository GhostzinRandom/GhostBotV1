const help = (prefix) => {
	return `> *Comandos* <
Comando : *${prefix}sticker* ou *${prefix}stiker*
Descrição : converter imagem / gif / vídeo em figurinha
Uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
Comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
Descrição : converter imagem em adesivo removendo o fundo
Uso: responder imagem, ou enviar imagem com legenda\n
Comando : *${prefix}toimg*
Descrição : converter adesivo em imagem
Uso: responder figurinha\n
Comando : *${prefix}tsticker* ou *${prefix}tstiker*
Descrição : converter texto em adesivo
Uso : *${prefix}tsticker (seu texto aqui)*\n
> *Comandos de meme* <
Comando : *${prefix}meme*
Descrição : imagens aleatórias de meme [inglês]
Uso: é só mandar o comando\n
Comando : *${prefix}gtts*
Descrição : converter texto em fala / áudio
Uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
Comando : *${prefix}url2img*
Descrição : tirar screenshots da web
Uso : *${prefix}url2img [tipe] [url]*\n
Comando : *${prefix}simi*
Descrição : sua mensagem será respondida por simi
Uso : *${prefix}simi (sua mensagem)*\n
Comando : *${prefix}ocr*
Descrição : pegue o texto na foto
Uso : responder imagem ou enviar imagem com legenda\n
Comando : *${prefix}wait*
Descrição : pesquisar anime com imagem [O que anime é isso / aquilo]
Uso : responder imagem ou enviar imagem com legenda\n
Comando : *${prefix}setprefix*
Descrição : substituir prefixo
Uso : *${prefix}setprefix [texto|opcional]*\nexemplo : *${prefix}setprefix ?*
Nota : Este comando só pode ser usado pelo dono do bot\n
Comando : *${prefix}add*
Descrição : adicionar membro ao grupo
Uso : *${prefix}add 62813xxxxx*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
Comando : *${prefix}kick*
Descrição : expulsar membros do grupo
Uso : *${prefix}kick @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
Comando : *${prefix}promote*
Descrição : tornar o membro do grupo como administrador do grupo
Uso : *${prefix}promote @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
Comando : *${prefix}demote*
Descrição: tornar o administrador do grupo como membro do grupo
Uso : *${prefix}demote @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o Comando é admin!\n
Comando : *${prefix}linkgroup*
Descrição : pegue o link do grupo
Uso : apenas envie o comando
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
Comando : *${prefix}leave*
Descrição : Faça o bot sair do grupo
Uso : apenas envie o comando
nota: só pode ser usado por administradores de grupo e proprietário de bot\n
Comando : *${prefix}tagall*
Descrição : marca todos os membros do grupo, incluindo administradores também
Uso : apenas envie o comando
nota: este comando pode ser usado se você for um administrador de grupo\n
Comando : *${prefix}simih*
Descrição : ative o modo simi no grupo
Uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo\n`
Comando : *${prefix}simi*
Descrição : não sei oque isso faz
Uso : *${prefix}simi (mensagem)*\n
Comando : *${prefix}info*
Descrição : Informações do bot
Uso : *é so usar o comando*\n
Comando : *${prefix}blocklist*
Descrição : lista de contatos bloqueados
Uso : *é so usar o comando*\n
Comando : *${prefix}hilih*
Descrição : Nao sei oque isso faz
Uso : *é so usar o comando*\n
Comanso : *${prefix}yt2mp3
Descrição : Transforma uma musica do YouTube em mp3
Uso : *${prefix} (Url/link)\n
Comando : *${prefix}ytsearch*
Descrição : Procura um vídeo ou musica no YouTube
Uso : *${prefix}ytsearch (nome do video ou musica)*\n
Comando : *${prefix}tiktok*
Descrição : ???
Uso : ???\n
Comando : *${prefix}tiktokstalk*
Descrição : ???
Uso : ???\n
Comando : *${prefix}nulis ou ${prefix}tulis*
Descrição : ???
Uso : ???\n
Comando : *${prefix}url2image*
Descrição : Transforma link para imagem
Uso : *${prefix}url2image (link)*\n
Comando : *${prefix}tagall2*
Descrição : marca todos oa membros do grupo
Uso : *é so usar o comando*\n
Comando : *${prefix}tagall3
Descrição : faz wa.me de todos os numeros do grupo
Uso : *é so usar o comando*\n
Comando : *${prefix}clearall*
Descrição : Limpa todo chat
Uso : *é so usar o comando*\n
Comando : *${prefix}bc*
Descrição : faz uma transmissão
Uso : *${prefix}bc (mensagem)*\n
Comando : *${prefix}listadmins*
Descrição : marca todos adms do grupo
Uso : é so usar o comando\n
Comando : *${prefix}welcome*
Descrição : ativa e desativa as mensagens de boas vindas
Uso: *${prefix}welcome 1, para ativar, ${prefix}welcome 0, para desativar*\n
Comando : *${prefix}clone*
Descrição: ???
Uso: ???\n
Comando: *${prefix}bom dia*
Descrição: gatinho do bom dia
Uso: é so usar o comando\n
Comando: *${prefix}boa tarde*
Descrição: gatinho do boa tarde
Uso: é so usar o comando\n
Comando: *${prefix}boa noite*
Descrição: gatinho do boa noite
Uso: é so usar o comando\n
Comando: *${prefix}gato*
Descrição: foto de gato
Uso: so usar o comando\n
Comando: *${prefix}gato fofo
Descrição: foto de gato fofo
Uso: so usar o comando\n
Comando: *${prefix}a mimir*
Descrição: a mimir
Uso: so usar o comando\n
}

exports.help = help
