---
layout: post
title: "Vulnerabilidades en sistemas inalámbricos (+ RISC-V)"
date: 2026-11-16 09:00:00 +0200
tags: [radio frequency, sdr, mifare, risc-v]
---

## Eguna/ordua/tokia: 2026/XI/26 / 15:00 / Gelategiko 1.7 gela

<div style="text-align: center;">
<img src="/assets/img/posts/cerradura.png" alt="Irrati-uhin lagin bat interpretatzen / Interpretando una muestra de señal de radio (GrAL/TFG: Erik Cembreros. Análisis de vulnerabilidades en sistemas inalámbricos mediante radiofrecuencia y RFID (Haririk gabeko sistemetan bulnerabideen azterketa zertzuen bidez: irrati-maiztasun eta RFID))." title="Irrati-uhin lagin bat interpretatzen / Interpretando una muestra de señal de radio (GrAL/TFG: Erik Cembreros. Análisis de vulnerabilidades en sistemas inalámbricos mediante radiofrecuencia y RFID (Haririk gabeko sistemetan bulnerabideen azterketa honako datu hauen gainean: irrati-maiztasuna eta RFID-a))." width="70%" />
</div>

## Hizkuntza / Idioma 

Gaztelera / Castellano

## Modalitatea / Modalidad

Aurrez aurrekoa / Presencial

## Edukia / Contenido

**[EUS] Izenburua**: Haririk gabeko sistemetango bulnerabideak (+ RISC-V)

**[CAS] Título**: Vulnerabilidades en sistemas inalámbricos (+ RISC-V)

**[EUS]** ZIUR Gelak eta Kriptografia Aplikatua (KrA-CrA) irakasgaiak hitzaldi bat antolatu dute non hainbat gai jorratuko baitira, segurtasun informatikoaren arloan gaurkotasun handikoak direnak eurak. Honako ikertzaile hauek izango ditugu hizlari: Erik Cembreros, Martin Horsfield eta Iker Galardi, hirurak ere Intelligent Systems Group (EHU) ikerketa-taldekoak; eta hurrenez hurren, zertzuekin erlazionatutako gaiak aurkeztuko dizkigute: MIFARE txartel adimendunen segurtasunarekin, softwarez definitutako irratia (SDR) darabilten teknologiekin, non bi gai horiek kriptografiarekin duten loturan azpimarra egingo baita, eta RISC-V arkitekturaren segurtasun-hedapenekin. Hitzaldi hau aukera ona da sakontzeko ezen teknologietan eta egungo zibersegurtasun-erronketan. Ez izan lotsarik eta anima zaitez!

**[CAS]** El aula ZIUR junto con la asignatura Criptografía Aplicada (KrA-CrA) organiza una charla en la que se abordarán distintos temas de actualidad en el ámbito de la seguridad informática. Los investigadores Erik Cembreros, Martin Horsfield e Iker Galardi del Intelligent Systems Group (EHU) presentarán, respectivamente, aspectos relacionados con la seguridad de las tarjetas inteligentes MIFARE, las tecnologías de radio definida por software (SDR) y su relación con la criptografía, y las extensiones de seguridad de la arquitectura RISC-V. Esta charla es una buena oportunidad para profundizar en tecnologías y retos actuales de la ciberseguridad. ¡Anímate a venir!

**[EUS]** Irrati-uhinak nonahi aurki ditzakegu mundu modernoan; nola, bere formarik klasikoenak diren irismen handiko eta ertaineko bandetan (irrati komertzialak, WiFi, Bluetooth), hala, bere irismen laburreko bertsioetan (ukipen gabeko txartelak, RFID etiketak etabar). Sistema digitalek uhin horiek erabiltzen dituztenean, jabedun protokoloak erabili ohi dituzte zeintzuk euren konplexutasunean gerizatzen baitira sahiesteko ezen eraso baten jomuga izan ditezen. Dena dela, hitzaldi honetan ikusiko dugun bezala, estrategia horrek emaitza ustelak emango dizkie. 

**[CAS]** Las señales de radio son ubicuas en el mundo moderno; tanto en su forma más clásica de largo y medio alcance (radio comercial, WiFi, Bluetooth) como en su versión de muy corto alcance (tarjetas contactless, tags rfid, etc). Al ser utilizadas por sistemas digitales suelen emplear protocolos propietarios que se escudan en su complejidad para evitar ser objeto de ataque, como veremos en esta ponencia esta estrategia resulta ser infructuosa.

**[EUS]** Hitzaldi honetan zertzuk erakutsiko dira, irrati-uhinak nola interzeptatu, alderantzizkatze ingeniaritza aplikatuko diegu protokolo erabilienei, eta azkenik, euren ahulguneak aztertuko ditugu eta erabiliko ezen horiek darabiltzaten sistemak bulneratzeko.

**[CAS]** En esta ponencia se monstrará cómo interceptar ondas de radio, aplicaremos ingeniería inversa sobre los protocolos utilizados y finalmente analizaremos sus debilidades y las usaremos para vulnerar los sistemas que las utilizan.

**[EUS]** Horiez gain, honako honi buruz ere hitz egingo da: RISC-V arkitekturaren segurtasun-hedapenenei buruz, zeintzuek inkorporetzen baitituzte hardware mekanismoak, zertzuk dituztenak helburu, erasoen aurkako babesak hobetzea eta honako zer hauen arteko isolamendua errefortzatzea: aplikazioen, sistema eragileen eta exekuzio-inguruneen.

**[CAS]** Adicionalmente, se hablará sobre las extensiones de seguridad de la arquitectura RISC-V, las cuales incorporan mecanismos hardware destinados a mejorar la protección frente a ataques y a reforzar el aislamiento entre aplicaciones, sistemas operativos y entornos de ejecución.

## Izen-ematea / Inscripción

**[EUS]** Kriptografia Aplikatua (KrA-CrA) irakasgaiko ikaslea bazara ez duzu izena eman beharrik. Gainontzekoei eskertuko nizueke email bat hona bidaltzea: dif.ziur@ehu.eus. Gaia INSKRIPZIOA IRRATIA ipini eta gorputzean zure datuak (izena + abizenak). Epe muga: 2026-XI-24.

**[CAS]** Si eres estudiante de la asignatura Criptografía Aplicada (KrA-CrA) no tienes que inscribirte. Al resto de personas agradecería que enviarais un email a dif.ziur@ehu.eus. Tema INSCRIPCIÓN IRRATIA y con tus datos (nombre + apellidos) en el cuerpo del mensaje. Fecha límite: 24-XI-2026.

## Hizlariak / Ponentes

**[EUS] Erik Cembreros**: Donostiako Informatika Fakultatean (EHU) Informatikan Ingeniaritza Gradua ikasi zuen; eta gaur egun Intelligent Systems Group (ISG) ikerketa-taldeko kide da.

**[CAS] Erik Cembreros**: Estudió Grado en Ingeniería Informática en la Facultad de Informática de Donostia (EHU); y hoy en día es miembro del grupo de investigación Intelligent Systems Group (ISG).

**[EUS] Martin Horsfield**: Donostiako Informatika Fakultatean (EHU) Informatikan Ingeniaritza Gradua ikasi zuen; eta gaur egun Intelligent Systems Group (ISG) ikerketa-taldeko kide da.

**[CAS] Martin Horsfield**: Estudió Grado en Ingeniería Informática en la Facultad de Informática de Donostia (EHU); y hoy en día es miembro del grupo de investigación Intelligent Systems Group (ISG).

**[EUS] Iker Galardi**: Donostiako Informatika Fakultatean (EHU) Informatikan Ingeniaritza Gradua ikasi zuen; eta gaur egun Intelligent Systems Group (ISG) ikerketa-taldeko kide da.

**[CAS] Iker Galardi**: Estudió Grado en Ingeniería Informática en la Facultad de Informática de Donostia (EHU); y hoy en día es miembro del grupo de investigación Intelligent Systems Group (ISG).
