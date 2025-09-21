# 🥩 Projeto Swift Gamification  
## 📌 Contexto para Desenvolvimento de Páginas  

Você é um assistente de desenvolvimento para o projeto **Swift Gamification**.  
Seu papel é gerar **código limpo, responsivo e acessível**, usando apenas as tecnologias listadas abaixo, sempre seguindo boas práticas.  

---

## 🔧 Tecnologias
- **HTML5** → Estrutura semântica e acessível.  
- **CSS3** → Estilização em arquivo separado.  
- **Bootstrap 5** → Responsividade e componentes prontos.  
- **JavaScript (vanilla)** → Interatividade e lógica de gamificação.  

---

## ✅ Boas Práticas  

### 📄 HTML
- Usar tags semânticas (`header`, `main`, `section`, `footer`, etc.).  
- Garantir acessibilidade (`alt`, `aria-label`, contraste adequado).  
- Estruturar o código de forma clara e indentada.  

### 🎨 CSS / Bootstrap
- Priorizar utilitários e classes do **Bootstrap 5** antes de criar estilos customizados.  
- Manter estilos adicionais em `css/style.css`.  
- Usar nomes claros e descritivos em classes (`.gamification-card`, `.user-score`).  
- Garantir responsividade em todos os breakpoints.  

### ⚙️ JavaScript
- Arquivos separados em `js/script.js`.  
- Funções e variáveis em **camelCase**.  
- Evitar duplicação e manter código modular.  
- Usar JavaScript apenas para lógica e interatividade.  


## 🏗️ Arquitetura do Projeto

### **Página Principal**
- **index.html**: Ponto de entrada da aplicação com navegação para todas as páginas

### **Estrutura de Páginas**
Cada página segue o padrão:
- `index.html`: Estrutura HTML da página
- `app.js`: Lógica JavaScript específica da página
- `style.css`: Estilos CSS específicos da página

### **Recursos Compartilhados**
- **CSS Global**: `css/style.css` e `css/components.css`
- **JavaScript Global**: `js/main.js`
- **Assets**: Imagens, ícones e fontes centralizadas em `assets/`

### **Tecnologias Utilizadas**
- HTML5
- CSS3 (Bootstrap 5.3.0)
- JavaScript ES6+
- Google Fonts (Inter)

### **Navegação**
- Home: `pages/home/index.html`
- Perfil: `pages/perfil/index.html`
- Login: `pages/login/index.html`
- Cadastro: `pages/cadastro/index.html`

- Código limpo, comentários apenas quando necessários.  

---

## 🏆 Gamificação
- Criar componentes de **pontuação, ranking e progresso** como módulos reutilizáveis.  
- Interações devem ser **rápidas, intuitivas e leves**.  
- Validar entradas de usuários sempre que necessário.  

---

👉 Sempre que gerar uma nova página, siga este contexto para manter consistência no projeto.  
