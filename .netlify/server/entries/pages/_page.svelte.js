import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload) {
  const whatsappGroupLink = "https://chat.whatsapp.com/B7mzIA5l2evKULxZRG3EfO";
  const wppLinkDeveloper = "https://wa.me/5584996122402?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Portal%20Mixou!";
  $$payload.out += `<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav"><div class="container px-5"><a class="navbar-brand fw-bold" href="#page-top">Portal Mixou</a> <div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ms-auto me-4 my-3 my-lg-0"><li class="nav-item"><a class="nav-link me-lg-3" href="#about">Sobre</a></li> <li class="nav-item"><a class="nav-link me-lg-3" href="#features">Funcionalidades</a></li> <li class="nav-item"><a class="nav-link me-lg-3" href="#community">Comunidade</a></li> <li class="nav-item"><a class="nav-link me-lg-3" href="#beta">BETA</a></li></ul> <a${attr("href", wppLinkDeveloper)} target="_blank" rel="noopener noreferrer" class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"><span class="d-flex align-items-center"><i class="bi-chat-text-fill me-2"></i> <span class="small">Dúvidas com desenvolvedor</span></span></a></div></div></nav> <header class="masthead"><div class="container px-5"><div class="row gx-5 align-items-center"><div class="col-lg-6"><div class="mb-5 mb-lg-0 text-center text-lg-start"><h1 class="display-1 lh-1 mb-3">Portal Mixou.</h1> <p class="lead fw-normal text-muted mb-5">Gerencie sua escola de forma fácil, intuitiva e prática!</p> <div class="d-flex flex-column flex-lg-row align-items-center"><a${attr("href", whatsappGroupLink)} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Quero participar da versão beta</a></div></div></div> <div class="col-lg-6"><img src="/isometric/undraw_software_engineer_re_tnjc.svg" alt="" width="100%" height="100%"></div></div></div></header> <aside id="about" class="bg-white"><div class="container px-5"><div class="row gx-5"><div class="col-lg-4"><img src="/isometric/undraw_online_test_re_kyfx.svg" alt="" width="100%" height="100%"></div> <div class="col-lg-8"><h2 class="display-4 lh-1 mb-4">Simplifique a gestão da sua escola</h2> <p class="lead fw-normal text-muted mb-5 mb-lg-0">O Portal Mixou é uma plataforma desenvolvida para atender as necessidades de escolas,
					cursinhos, cursos de idiomas e reforço. Oferecemos uma solução intuitiva e prática para
					gerenciar todos os aspectos do seu negócio.</p> <div class="w-100 text-end"><a${attr("href", whatsappGroupLink)} target="_blank" rel="noopener noreferrer" class="btn btn-secondary mt-4">Quero receber acesso a versão beta</a></div></div></div></div></aside> <section id="features"><div class="container px-5"><div class="container-fluid px-5"><div class="row gx-5"><div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-people icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Gestão de Pessoas</h3> <p class="text-muted mb-0">Administre professores, alunos e administradores de forma prática.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-cash-coin icon-feature text-secondary d-block mb-3"></i> <span class="h3 font-alt">Gestão Financeira</span><br> <span>(Em breve)</span> <p class="text-muted mb-0">Controle financeiro completo, com relatórios e integrações.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-speedometer2 icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Dashboard</h3> <p class="text-muted mb-0">Acompanhe o desempenho da sua escola em tempo real.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-layers icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Gestão de Turmas</h3> <p class="text-muted mb-0">Organize e gerencie suas turmas de maneira eficiente.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-folder icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Atividades</h3> <p class="text-muted mb-0">Compartilhe materiais e organize as tarefas escolares.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-chat-left-text icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Fóruns</h3> <p class="text-muted mb-0">Espaço para notícias da escola e discussões específicas de cada turma.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-shield-lock icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Segurança</h3> <p class="text-muted mb-0">Proteção de dados com as melhores práticas de segurança.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-calendar icon-feature text-secondary d-block mb-3"></i> <span class="h3 font-alt">Calendário Acadêmico</span><br> <span>(Em breve)</span> <p class="text-muted mb-0">Planeje e acompanhe o calendário letivo com facilidade.</p></div></div> <div class="col-lg-4 col-md-6 mb-5"><div class="text-center"><i class="bi-whatsapp icon-feature text-secondary d-block mb-3"></i> <h3 class="font-alt">Comunidade no WhatsApp</h3> <p class="text-muted mb-0">Participe da nossa comunidade de usuários betas para suporte e feedbacks.</p></div></div></div></div></div></section> <section id="community" class="bg-white"><div class="container px-5"><div class="row gx-5"><div class="col-lg-8"><h2 class="display-4 lh-1 mb-4">Comunidade Exclusiva</h2> <p class="lead fw-normal text-muted mb-5 mb-lg-0">Conecte-se com outros gestores e faça parte de um grupo exclusivo no WhatsApp, onde vocês
					podem compartilhar insights, tirar dúvidas e receber notificações das novas versões do
					Portal Mixou em primeira mão.</p> <a${attr("href", whatsappGroupLink)} target="_blank" rel="noopener noreferrer" class="btn btn-secondary mt-4">Participar da comunidade</a></div> <div class="col-lg-4"><img src="/isometric/undraw_a_day_off_re_hedl.svg" alt="" width="100%" height="100%"></div></div></div></section> <section id="beta" class="bg-light"><div class="container px-5"><div class="row gx-5 justify-content-center"><div class="col-lg-4"><img src="/isometric/undraw_scrum_board_re_wk7v.svg" alt="" width="100%" height="100%"></div> <div class="col-lg-8"><div class="h2 fs-1 mb-4"><h2 class="display-4 lh-1 mb-4">Versão BETA</h2> <p class="lead fw-normal text-muted mb-5 mb-lg-0">Junte-se à versão beta e ajude a moldar o futuro da gestão escolar com feedbacks e
						sugestões de novas funcionalidades.</p></div> <a${attr("href", whatsappGroupLink)} target="_blank" rel="noopener noreferrer" class="btn btn-secondary mt-4">Acesso a versão BETA</a></div></div></div></section> <footer class="bg-black text-center py-5"><div class="container px-5"><div class="text-white-50 small"><div class="mb-2">© Portal Mixou 2024. All Rights Reserved.</div></div></div></footer>`;
}
export {
  _page as default
};
