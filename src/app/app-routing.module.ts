import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './secciones/home/home.module#HomePageModule' },
  { path: 'atlas', loadChildren: './secciones/atlas/atlas/atlas.module#AtlasPageModule' },
  { path: 'contenido-editorial', loadChildren: './secciones/contenido-editorial/contenido-editorial/contenido-editorial.module#ContenidoEditorialPageModule' },
  { path: 'articulos-medicos', loadChildren: './secciones/contenido-editorial/articulos-medicos/articulos-medicos.module#ArticulosMedicosPageModule' },
  { path: 'abstracts', loadChildren: './secciones/contenido-editorial/abstracts/abstracts.module#AbstractsPageModule' },
  { path: 'guias-practica-clinica', loadChildren: './secciones/contenido-editorial/guias-practica-clinica/guias-practica-clinica.module#GuiasPracticaClinicaPageModule' },
  { path: 'herramientas-medicas', loadChildren: './secciones/herramientas-medicas/herramientas-medicas/herramientas-medicas.module#HerramientasMedicasPageModule' },
  { path: 'interacciones-medicamentosas', loadChildren: './secciones/interacciones/interacciones-medicamentosas/interacciones-medicamentosas.module#InteraccionesMedicamentosasPageModule' },
  { path: 'interaction-icd', loadChildren: './secciones/interacciones/interaction-icd/interaction-icd.module#InteractionIcdPageModule' },
  { path: 'interaction-labs', loadChildren: './secciones/interacciones/interaction-labs/interaction-labs.module#InteractionLabsPageModule' },
  { path: 'interaction-products', loadChildren: './secciones/interacciones/interaction-products/interaction-products.module#InteractionProductsPageModule' },
  { path: 'interaction-result', loadChildren: './secciones/interacciones/interaction-result/interaction-result.module#InteractionResultPageModule' },
  { path: 'interaction-search-engine', loadChildren: './secciones/interacciones/interaction-search-engine/interaction-search-engine.module#InteractionSearchEnginePageModule' },
  { path: 'interaction-susbtances', loadChildren: './secciones/interacciones/interaction-susbtances/interaction-susbtances.module#InteractionSusbtancesPageModule' },
  { path: 'interactions', loadChildren: './secciones/interacciones/interactions/interactions.module#InteractionsPageModule' },
  { path: 'nestle', loadChildren: './secciones/nestle/nestle/nestle.module#NestlePageModule' },
  { path: 'formulario-solicitud-representante', loadChildren: './secciones/solicitud-representante-medico/formulario-solicitud-representante/formulario-solicitud-representante.module#FormularioSolicitudRepresentantePageModule' },
  { path: 'push-notificaciones', loadChildren: './secciones/notificaciones-push/push-notificaciones/push-notificaciones.module#PushNotificacionesPageModule' },
  { path: 'configuracion', loadChildren: './secciones/configuracion/configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'contacto', loadChildren: './secciones/configuracion/contacto/contacto.module#ContactoPageModule' },
  { path: 'creditos', loadChildren: './secciones/configuracion/creditos/creditos.module#CreditosPageModule' },
  { path: 'perfil', loadChildren: './secciones/configuracion/perfil/perfil.module#PerfilPageModule' },
  { path: 'sugerencias', loadChildren: './secciones/configuracion/sugerencias/sugerencias.module#SugerenciasPageModule' },
  { path: 'ippa', loadChildren: './secciones/nestle/ippa/ippa.module#IppaPageModule' },
  { path: 'registro', loadChildren: './secciones/registro/registro/registro.module#RegistroPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
