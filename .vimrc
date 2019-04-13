" Execução do gerenciador de plugins
" Não precisa estar ativo pois o mesmo foi carregado de forma global pelo
" ~/.vimrc
" execute pathogen#infect()


" Altera o esquema de cor
colorscheme dracula 

"Define o tamnho da identação
set tabstop=2

" Deixar coretente a identação com o tab
set shiftwidth=2

" Comportamento usal do backspa
set backspace=2

"Identifica o tipo de arquivo e identa
filetype plugin indent on

"Colore a baseado na sinta
syntax on

"Exibição de números nas linhas
set number

" Faz calculo relativo das linhas (qual a quantidade de linhas a partir do
" curso? ) ;-)
set relativenumber

" Busca incremental (feedback enquanto busca)
set incsearch

" Destaque nos resultado das busca
set hlsearch

"Este comando não faz parte do curso
"Ele permite exibir arquivos ocultos na estrutura do neerdtree
let NERDTreeShowHidden=1

"Este comando não faz parte do curso
"Ele já abre o vim abrindo o nerdtree
autocmd VimEnter * NERDTree
autocmd VimEnter * wincmd p

"Codificação do arquivo
"set fileencoding=iso-8859-1

"Visualizar na codificação desejada
"set encoding=iso-8859-1

" Use espaÃ§os no lugar de tab
set expandtab

"tabspace respeitar identaÃÃo (nÃo quero voltar sÃmente no me
set softtabstop=2
