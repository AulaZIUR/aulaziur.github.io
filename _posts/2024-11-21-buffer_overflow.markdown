---
layout: post
title: "Desarrollo de exploits: Stack Buffer Overflow"
date: 2024-10-29 09:00:00 +0200
tags: [buffer overflow, exploits, reverse engineering]
---

## Fecha/hora/lugar: 21 de noviembre de 2024 / de 18:30 a 20:00 / aula Ziur

<div style="text-align: center;">
<img src="/assets/img/posts/Stack_Overflow.png" alt="Esquema del segmento de la pila de un proceso (una sección de la memoria principal), en la que aparecen el sitio reservado para las variables locales, el Saved Frame Pointer y la Return Address." title="Esquema del segmento de la pila de un proceso (wikipedia.org)." width="30%" />
</div>

## Contenido

La búsqueda de vulnerabilidades en aplicaciones y el desarrollo de exploits para investigar qué riesgo supone una vulnerabilidad es una habilidad muy valiosa para las empresas antivirus. En este campo de la ciberseguridad hay que hacer uso de campos como la ingeniería inversa del software (Reverse Engineering) y hay que dominar el funcionamiento del computador a bajo nivel: sistemas operativos, redes de computadores y arquitectura de computadores.

El camino para adentrarse en el campo de desarrollo de exploits suele iniciarse explotando la vulnerabilidad de desbordamiento de buffer en pila (Stack Buffer Overflow). Y esta es la vulnerabilidad que se trabajará en este taller.

Este taller deriva de un Trabajo de Fin de Grado (TFG) en el que se desarrolló una plataforma para el despliegue automatizado y dinámico de ejercicios CTF (Capture The Flag). A modo de ejercicios CTF se investigaron y se generaron escenarios vulnerables para practicar las técnicas de exploiting de vulnerabilidades básicas a código binario (por ejemplo, ejecutables y librerías). Por tanto, en este taller se trabajará contra códigos binarios que han sido diseñados como parte de este TFG.

## Inscripción

La inscripción es gratuita. Basta con que envíes un email a [dif.ziur@ehu.eus](dif.ziur@ehu.eus) con el tema INSCRIPCIÓN BUFFER y con tus datos de contacto (nombre+apellidos, email) en el cuerpo del mensaje. Deadline para apuntarse: 2024-11-19.

## Requisitos

Traer el portátil y tener descargado y montado la siguiente imagen de VirtualBox: (el enlace, próximamente disponible)

## Ponentes

**Unax Labaka Zubimendi** ex-estudiante del Grado en Ingeniería Informática de Donostia. Defendió su TFG en septiembre de 2024. 
