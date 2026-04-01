import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, FileText, CheckCircle } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept }) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const contentEn = (
    <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
      <h1 className="text-3xl font-black mb-6 text-center text-dhl-red italic">DHL Express Online Services Terms of Use</h1>
      <div className="space-y-6">
        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">1. Scope, object of use and contractual parties</h2>
          <p className="mb-2"><strong>1.1</strong> The DHL Express Online Services platform, App, or website, which you just use (“the Online Application") is offered by DHL International GmbH, Charles-de-Gaulle-Straße 20, 53113 Bonn ("DHL"). Through the Online Application you will be able to use various DHL Express Online Services (“DHL Services”), e.g., tracking of shipments.</p>
          <p><strong>1.2</strong> The DHL Express Online Services Terms of Use ("Terms") apply to your use of the Online Application and the DHL Services. By accepting the Terms, you enter a contract with DHL on the Online Application and the DHL Services. However, the use of certain DHL Services may be subject to the respective contractual terms, which will be subject to separate acceptance. All transportation services provided by DHL Express are governed by the DHL Express Terms and Conditions of Carriage.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">2. Use of the Online Application</h2>
          <p className="mb-2"><strong>2.1</strong> To use all features of the Online Application and the DHL Services, you must accept the Terms. In case you do not want to accept the Terms, you cannot use the Online Application and DHL Services.</p>
          <p className="mb-2"><strong>2.2</strong> You are responsible for using the Online Application and the DHL Services in accordance with these Terms, lawfully and in good faith. You are not to cause any damage or harm of any kind (including reputational damage) to DHL or any third party. You shall not use the Online Application or the DHL Services in a way that violates applicable law or the Terms.</p>
          <p className="mb-2"><strong>2.3</strong> Certain DHL Services in the Online Application may require a fee. Before using a DHL Service, DHL will specify if a fee is required.</p>
          <p className="mb-2"><strong>2.4</strong> If the Online Application uses Bluetooth Low Energy technology to transfer both security digital keys and data from the logistics providers, you accept that the before mentioned is transmitted using this technology and process, both in terms of your own data as well as third party and logistic provider data.</p>
          <p className="mb-2"><strong>2.5</strong> Unless otherwise specified within the DHL Services, all data, documents, and other information (“Electronic Data”) will be shared electronically within the Online Application. You authorize DHL to access, process and use all Electronic Data as necessary to perform and fulfil its obligations for the purposes specified in the Online Application and in the specific DHL Services.</p>
          <p><strong>2.6</strong> By providing electronic data to DHL, you acknowledge that you are responsible for the completeness and accuracy of the electronic data which shall be timely submitted to DHL, including but not limited to a detailed description of the content of the shipment. DHL will rely on the electronic data submitted and DHL is not obliged to verify its completeness or accuracy by checking against any paper or scanned document. You will bear all responsibility in case of any discrepancy between such electronic data and any paper or scanned document.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">3. Rights of Use</h2>
          <p className="mb-2"><strong>3.1</strong> Unless applicable law gives you more rights despite the limitations set out in this clause 3, DHL grants you the revocable, non-exclusive, non-transferable, limited right to download, install and to use the Online Application only for the purposes set out in clause 1.1 of these Terms. The right granted to you is solely for your personal, non-commercial purposes.</p>
          <p className="mb-2"><strong>3.2</strong> All texts, graphics, user interfaces, databases, trademarks, logos, and computer code (“Content”) in the Online Application and the DHL Services is owned or licensed by DHL and is protected by copyright and trademark laws and other intellectual property rights. The Content includes but is not limited to the design, structure, selection, expression, “look and feel” and arrangement of the Content. Except as expressly provided in these Terms, no Content may be processed without DHL’s prior written consent. The processing includes – in whole or in part - copied, scraped, modified, cached, reproduced, republished, uploaded, transmitted, or distributed in any way to any other computer, server, website or other medium for publication or distribution.</p>
          <p className="mb-2"><strong>3.3</strong> By way of example and without limitations, you shall not or not attempt to and not authorize or permit others to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code form, underlying ideas, algorithms or structure of the Online Application and/or the DHL Services and/or the Content.</li>
            <li>repackage, replicate, copy or recreate the Online Application or the DHL Services or the Content.</li>
            <li>modify the Online Application or the DHL Services or the Content; or</li>
            <li>publish any performance or benchmark tests or analyses relating to the software or the use thereof; or</li>
            <li>offer for sale, market, distribute, sublicense, assign, share, timeshare, (re-)sell, rent, lease, or grant a security interest in the Online Application or the DHL Services or Content in whole or in part. You may not commercially exploit in any manner any of the Content or data obtained from the Online Application or from the DHL Services.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">4. Availability</h2>
          <p className="mb-2"><strong>4.1</strong> DHL will use reasonable efforts to ensure that the Online Application is available 365 days per year except during scheduled maintenance windows or during Force Majeure events. Scheduled maintenance windows will be pre-announced, to the best of our ability, on the Online Application or by email in advance.</p>
          <p><strong>4.2</strong> The Online Application is deemed available as long as you can access the DHL Services. DHL makes no spe-cific warranties regarding the continued operation of the Online Application, nor in terms of service levels for identifying or resolving reported issues.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">5. IT-Security.</h2>
          <p className="mb-2"><strong>5.1</strong> DHL ensures that it maintains appropriate security measures in line with International Standard Organiza-tion ISO 27001/2013. This is DHL’s entire obligation regarding the security of information and data and DHL`s IT-systems in connection with your use of the Online Application and the DHL Services.</p>
          <p className="mb-2"><strong>5.2</strong> You are solely responsible for maintaining back-up copies of Electronic Data provided by you, when using DHL Services or retrieved by you from the DHL Services (“Your Data”). Without prejudice to any existing con-tractual obligations between DHL and you DHL shall not be required to hand over or provide access to Your Data, unless necessary to fulfil the purposes set out in clause 1.1 or otherwise agreed upon in writing.</p>
          <p className="mb-2"><strong>5.3</strong> It is your responsibility to take appropriate precautions to ensure the security of your computer systems and networks, as well as the integrity and confidentiality of Your Data, e.g., without limitation, by activating the security features offered by DHL, currently eSecure, or by keeping backup copies of Your Data or by observ-ing all IT-security related notifications (e.g., phishing alerts on the Online Application).</p>
          <p className="mb-2"><strong>5.4</strong> You shall not nor attempt to nor permit third parties to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>gain unauthorized access to Electronic Data, which is not Your Data or intended for your use or use Elec-tronic Data of third parties without authorization.</li>
            <li>perform any security tests (e.g., pen-testing), performance tests (e.g., load-testing), stress tests or simi-lar tests on the Online Application.</li>
            <li>use any automated systems and/or software (including i.e., crawlers, spiders, search-bots, browser plug-ins, extensions, add-ons or other technological means or processes), to access, scrape or modify the DHL Services or the Online Application or to copy, add, download, or retrieve Content from the Online Application.</li>
            <li>interfere with, modify, disable, hinder or damage the accessibility and any features, functionality or se-curity controls of the Online Application or the DHL Services.</li>
            <li>defeat, avoid, bypass, remove, deactivate, or otherwise circumvent any protection mechanisms for the Online Application or the DHL Services.</li>
            <li>introduce viruses, trojans, worms, logic bombs or other technologically harmful or malicious materials or perform (distributed) denial-of-service attacks or other cyber-attacks.</li>
            <li>procure (e.g., by way of phishing or (social) pharming) and use or deploy user credentials, such as usernames, passwords, credit card information.</li>
            <li>engage in industrial espionage to retrieve Electronic Data (esp. data and/or information representing trade or business secrets) by any of the above actions.</li>
            <li>integrate the Online Application or the DHL Services into IT-systems or operate IT-systems in a way that third parties or automated systems/software can have direct or indirect unsecured or unauthorized ac-cess to DHL Services or the Online Application.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">6. Suspension of the use of the Online Application and the DHL Services</h2>
          <p className="mb-2"><strong>6.1</strong> DHL may suspend or limit the use of the Online Application and the access to DHL Services, immediately upon notice, if:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>DHL determines at its own discretion that there is misuse, fraudulent, illegal and/or contrary to good faith use of the Online Application and the DHL Services; or</li>
            <li>DHL determines at its own discretion that there is a material breach of your obligations according to these Terms; or</li>
            <li>DHL determines at its own discretion that there is a reasonable suspicion of a security incident.</li>
            <li>extraordinary maintenance work is required; or</li>
            <li>suspension or limitation is required by law, a court decision, or a request from a governmental body.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">7. Export Controls, Sanctions, and Customs Laws</h2>
          <p className="mb-2"><strong>7.1</strong> Export controls, economic sanctions, and customs laws and regulations apply to the provision of the DHL Services and your access to the Online Application.</p>
          <p className="mb-2"><strong>7.2</strong> You agree to comply fully with all UN, EU, US, UK, and other applicable export controls and economic sanc-tions laws and regulations and, where applicable, local customs laws (collectively, “Trade Laws”). You rep-resent and warrant that you (and any company, entity, or third party on whose behalf you are engaged) are not listed on any applicable sanctions lists as a denied or restricted party.</p>
          <p><strong>7.5</strong> To the extent permitted by law, you agree to indemnify and hold harmless DHL against any damages, claims and costs by any third party, including but not limited to attorney fees and any claims, fines or penalties from relevant authorities, arising in connection with any termination of this Agreement which result from any vio-lation by DHL of Sanctions Laws or Export Control Laws, caused by your negligent breach of this provision.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">8. Warranty, Liability and Claims</h2>
          <p className="mb-2"><strong>8.1</strong> No information obtained via the Online Application, or the DHL Services shall create any warranty not ex-pressly stated by DHL in these Terms.</p>
          <p><strong>8.2</strong> Unless otherwise agreed in a specific services order and to the extent permitted by applicable law, in no event shall DHL be liable for any claims for loss or damage.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">9. Circumstances beyond DHL’s control</h2>
          <p><strong>9.1</strong> DHL is not liable for any loss or damage arising out of circumstances beyond DHL’s control. These include but are not limited to acts of God, compliance with any acts of any governmental or other authority, war or national emergency, riots, civil commotion, acts of terrorism, piracy, fire, storms or floods, explosion, crimi-nal acts, any information security-related threats or attacks (e.g. through computer viruses, bot attacks or other cyber-attacks), power outages, configuration problems or malfunctions of your workstation or Internet connection, epidemic, pandemic, lock-outs, strikes and other industrial action.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">10. Communication from DHL</h2>
          <p>DHL may communicate with you via the communication channel that you specified in the Online Application, or through notifications or messages in the Online Application.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">11. Data Protection</h2>
          <p><strong>11.1</strong> DHL will collect, store, and process your personal data and the third party’s data you provided in accordance with applicable laws and the DHL Group Data Privacy Policy. Further information about the processing of personal data is available on the Privacy Notice page on the Online Application.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">12. Governing Law</h2>
          <p>Unless contrary to applicable mandatory law, these Terms shall be governed by the laws of the country of the seat of DHL.</p>
        </section>
      </div>
    </div>
  );

  const contentTh = (
    <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
      <h1 className="text-3xl font-black mb-6 text-center text-dhl-red italic">ข้อกำหนดการใช้บริการออนไลน์ของ DHL Express</h1>
      <div className="space-y-6">
        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">1. ขอบเขต วัตถุประสงค์การใช้งาน และคู่สัญญา</h2>
          <p className="mb-2"><strong>1.1</strong> แพลตฟอร์ม แอป หรือเว็บไซต์ DHL Express Online Services ที่คุณเพิ่งใช้งาน (“แอปพลิเคชันออนไลน์”) ให้บริการโดย DHL International GmbH, Charles-de-Gaulle-Straße 20, 53113 Bonn ("DHL") คุณจะสามารถใช้บริการต่างๆ ของ DHL Express Online (“บริการของ DHL”) ผ่านแอปพลิเคชันออนไลน์ได้ เช่น การติดตามการจัดส่ง</p>
          <p><strong>1.2</strong> ข้อกำหนดการใช้งานบริการออนไลน์ของ DHL Express ("ข้อกำหนด") มีผลบังคับใช้กับการใช้งานแอปพลิเคชันออนไลน์และบริการของ DHL ของคุณ การยอมรับข้อกำหนดหมายความว่าคุณได้ทำสัญญากับ DHL เกี่ยวกับแอปพลิเคชันออนไลน์และบริการของ DHL อย่างไรก็ตาม การใช้บริการบางอย่างของ DHL อาจอยู่ภายใต้ข้อกำหนดของสัญญาที่เกี่ยวข้อง ซึ่งจะต้องได้รับการยอมรับแยกต่างหาก บริการขนส่งทั้งหมดที่ให้บริการโดย DHL Express อยู่ภายใต้ข้อกำหนดและเงื่อนไขการขนส่งของ DHL Express</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">2. การใช้แอปพลิเคชันออนไลน์</h2>
          <p className="mb-2"><strong>2.1</strong> ในการใช้คุณสมบัติทั้งหมดของแอปพลิเคชันออนไลน์และบริการของ DHL คุณต้องยอมรับข้อกำหนด ในกรณีที่คุณไม่ต้องการยอมรับข้อกำหนด คุณจะไม่สามารถใช้แอปพลิเคชันออนไลน์และบริการของ DHL ได้</p>
          <p className="mb-2"><strong>2.2</strong> คุณมีหน้าที่รับผิดชอบในการใช้แอปพลิเคชันออนไลน์และบริการของ DHL ตามข้อกำหนดเหล่านี้ อย่างถูกกฎหมายและโดยสุจริต คุณต้องไม่ก่อให้เกิดความเสียหายหรืออันตรายใดๆ (รวมถึงความเสียหายต่อชื่อเสียง) ต่อ DHL หรือบุคคลที่สาม คุณต้องไม่ใช้แอปพลิเคชันออนไลน์หรือบริการของ DHL ในลักษณะที่ละเมิดกฎหมายที่บังคับใช้หรือข้อกำหนด</p>
          <p className="mb-2"><strong>2.3</strong> บริการบางอย่างของ DHL ในแอปพลิเคชันออนไลน์อาจมีค่าธรรมเนียม ก่อนใช้บริการของ DHL ทาง DHL จะระบุว่าต้องเสียค่าธรรมเนียมหรือไม่</p>
          <p className="mb-2"><strong>2.4</strong> หากแอปพลิเคชันออนไลน์ใช้เทคโนโลยี Bluetooth Low Energy เพื่อถ่ายโอนทั้งคีย์ดิจิทัลเพื่อความปลอดภัยและข้อมูลจากผู้ให้บริการโลจิสติกส์ คุณยอมรับว่าสิ่งที่กล่าวก่อนหน้านี้จะถูกส่งโดยใช้เทคโนโลยีและกระบวนการนี้ ทั้งในส่วนของข้อมูลของคุณเองและข้อมูลของบุคคลที่สามและผู้ให้บริการโลจิสติกส์</p>
          <p className="mb-2"><strong>2.5</strong> เว้นแต่จะระบุไว้เป็นอย่างอื่นในบริการของ DHL ข้อมูล เอกสาร และข้อมูลอื่นๆ ทั้งหมด (“ข้อมูลอิเล็กทรอนิกส์”) จะถูกแบ่งปันทางอิเล็กทรอนิกส์ภายในแอปพลิเคชันออนไลน์ คุณอนุญาตให้ DHL เข้าถึง ประมวลผล และใช้ข้อมูลอิเล็กทรอนิกส์ทั้งหมดตามความจำเป็นเพื่อปฏิบัติและปฏิบัติตามภาระผูกพันของตนเพื่อวัตถุประสงค์ที่ระบุไว้ในแอปพลิเคชันออนไลน์และในบริการเฉพาะของ DHL</p>
          <p><strong>2.6</strong> การให้ข้อมูลอิเล็กทรอนิกส์แก่ DHL แสดงว่าคุณรับทราบว่าคุณมีหน้าที่รับผิดชอบต่อความสมบูรณ์และความถูกต้องของข้อมูลอิเล็กทรอนิกส์ซึ่งจะต้องส่งให้ DHL อย่างทันท่วงที ซึ่งรวมถึงแต่ไม่จำกัดเพียงคำอธิบายโดยละเอียดของเนื้อหาในการจัดส่ง DHL จะอาศัยข้อมูลอิเล็กทรอนิกส์ที่ส่งมา และ DHL ไม่มีภาระผูกพันในการตรวจสอบความสมบูรณ์หรือความถูกต้องโดยการตรวจสอบกับเอกสารที่เป็นกระดาษหรือสแกน คุณจะรับผิดชอบทั้งหมดในกรณีที่เกิดความคลาดเคลื่อนระหว่างข้อมูลอิเล็กทรอนิกส์ดังกล่าวกับเอกสารที่เป็นกระดาษหรือสแกน</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">3. สิทธิ์ในการใช้งาน</h2>
          <p className="mb-2"><strong>3.1</strong> เว้นแต่กฎหมายที่ใช้บังคับจะให้สิทธิ์แก่คุณมากกว่าข้อจำกัดที่กำหนดไว้ในข้อ 3 นี้ DHL ให้สิทธิ์แก่คุณในการดาวน์โหลด ติดตั้ง และใช้งานแอปพลิเคชันออนไลน์ที่สามารถเพิกถอนได้ ไม่ผูกขาด ไม่สามารถถ่ายโอนได้ และจำกัดเฉพาะเพื่อวัตถุประสงค์ที่กำหนดไว้ในข้อ 1.1 ของข้อกำหนดเหล่านี้เท่านั้น สิทธิ์ที่มอบให้แก่คุณมีไว้เพื่อวัตถุประสงค์ส่วนตัวที่ไม่ใช่เชิงพาณิชย์เท่านั้น</p>
          <p className="mb-2"><strong>3.2</strong> ข้อความ กราฟิก ส่วนต่อประสานผู้ใช้ ฐานข้อมูล เครื่องหมายการค้า โลโก้ และรหัสคอมพิวเตอร์ทั้งหมด (“เนื้อหา”) ในแอปพลิเคชันออนไลน์และบริการของ DHL เป็นของหรือได้รับอนุญาตจาก DHL และได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์และเครื่องหมายการค้าและสิทธิ์ในทรัพย์สินทางปัญญาอื่นๆ เนื้อหาดังกล่าวรวมถึงแต่ไม่จำกัดเพียงการออกแบบ โครงสร้าง การเลือก การแสดงออก "รูปลักษณ์" และการจัดเรียงของเนื้อหา เว้นแต่จะระบุไว้อย่างชัดแจ้งในข้อกำหนดเหล่านี้ ห้ามมิให้มีการประมวลผลเนื้อหาใดๆ โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรล่วงหน้าจาก DHL การประมวลผลดังกล่าวรวมถึง - ทั้งหมดหรือบางส่วน - การคัดลอก ขูดข้อมูล แก้ไข แคช ทำซ้ำ เผยแพร่ซ้ำ อัปโหลด ส่งต่อ หรือแจกจ่ายในลักษณะใดๆ ไปยังคอมพิวเตอร์ เซิร์ฟเวอร์ เว็บไซต์ หรือสื่ออื่นๆ เพื่อการเผยแพร่หรือแจกจ่าย</p>
          <p className="mb-2"><strong>3.3</strong> โดยเป็นตัวอย่างและไม่มีข้อจำกัด คุณจะต้องไม่พยายามและไม่อนุญาตหรืออนุญาตให้ผู้อื่น:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>ทำวิศวกรรมย้อนกลับ, ดีคอมไพล์, ถอดประกอบ หรือพยายามดึงซอร์สโค้ด, แนวคิดพื้นฐาน, อัลกอริทึม หรือโครงสร้างของแอปพลิเคชันออนไลน์และ/หรือบริการของ DHL และ/หรือเนื้อหา</li>
            <li>บรรจุใหม่, ทำซ้ำ, คัดลอก หรือสร้างใหม่ซึ่งแอปพลิเคชันออนไลน์ หรือบริการของ DHL หรือเนื้อหา</li>
            <li>แก้ไขแอปพลิเคชันออนไลน์ หรือบริการของ DHL หรือเนื้อหา หรือ</li>
            <li>เผยแพร่การทดสอบประสิทธิภาพหรือการเปรียบเทียบหรือการวิเคราะห์ใดๆ ที่เกี่ยวข้องกับซอฟต์แwร์หรือการใช้งาน หรือ</li>
            <li>เสนอขาย, ทำตลาด, แจกจ่าย, อนุญาตช่วง, มอบหมาย, แบ่งปัน, ให้เช่าช่วงเวลา, (ขายต่อ), ให้เช่า, หรือให้สิทธิ์ในหลักประกันในแอปพลิเคชันออนไลน์ หรือบริการของ DHL หรือเนื้อหาทั้งหมดหรือบางส่วน คุณไม่สามารถใช้ประโยชน์ในเชิงพาณิชย์ในลักษณะใดๆ จากเนื้อหาหรือข้อมูลใดๆ ที่ได้รับจากแอปพลิเคชันออนไลน์หรือจากบริการของ DHL</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">4. ความพร้อมใช้งาน</h2>
          <p className="mb-2"><strong>4.1</strong> DHL จะใช้ความพยายามตามสมควรเพื่อให้แน่ใจว่าแอปพลิเคชันออนไลน์พร้อมใช้งาน 365 วันต่อปี ยกเว้นในช่วงเวลาการบำรุงรักษาตามกำหนดการหรือในช่วงเหตุสุดวิสัย ช่วงเวลาการบำรุงรักษาตามกำหนดการจะได้รับการประกาศล่วงหน้า เท่าที่เราจะสามารถทำได้ บนแอปพลิเคชันออนไลน์หรือทางอีเมลล่วงหน้า</p>
          <p><strong>4.2</strong> แอปพลิเคชันออนไลน์ถือว่าพร้อมใช้งานตราบเท่าที่คุณสามารถเข้าถึงบริการของ DHL ได้ DHL ไม่รับประกันโดยเฉพาะเกี่ยวกับการทำงานอย่างต่อเนื่องของแอปพลิเคชันออนไลน์ หรือในแง่ของระดับการบริการสำหรับการระบุหรือแก้ไขปัญหาที่รายงาน</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">5. ความปลอดภัยด้านไอที</h2>
          <p className="mb-2"><strong>5.1</strong> DHL รับรองว่าจะรักษมาตรการรักษาความปลอดภัยที่เหมาะสมซึ่งสอดคล้องกับมาตรฐานสากล ISO 27001/2013 นี่เป็นภาระผูกพันทั้งหมดของ DHL เกี่ยวกับความปลอดภัยของข้อมูลและข้อมูลและระบบไอทีของ DHL ที่เกี่ยวข้องกับการใช้งานแอปพลิเคชันออนไลน์และบริการของ DHL ของคุณ</p>
          <p className="mb-2"><strong>5.2</strong> คุณมีหน้าที่รับผิดชอบแต่เพียงผู้เดียวในการเก็บรักษาสำเนาสำรองของข้อมูลอิเล็กทรอนิกส์ที่คุณให้ไว้ เมื่อใช้บริการของ DHL หรือที่คุณดึงมาจากบริการของ DHL (“ข้อมูลของคุณ”) โดยไม่กระทบต่อภาระผูกพันตามสัญญาที่มีอยู่ระหว่าง DHL กับคุณ DHL ไม่จำเป็นต้องส่งมอบหรือให้สิทธิ์เข้าถึงข้อมูลของคุณ เว้นแต่จำเป็นเพื่อบรรลุวัตถุประสงค์ที่กำหนดไว้ในข้อ 1.1 หรือตกลงเป็นอย่างอื่นเป็นลายลักษณ์อักษร</p>
          <p className="mb-2"><strong>5.3</strong> เป็นความรับผิดชอบของคุณที่จะต้องใช้มาตรการป้องกันที่เหมาะสมเพื่อความปลอดภัยของระบบคอมพิวเตอร์และเครือข่ายของคุณ ตลอดจนความสมบูรณ์และการรักษาความลับของข้อมูลของคุณ เช่น โดยไม่จำกัดเพียง การเปิดใช้งานคุณสมบัติด้านความปลอดภัยที่ DHL นำเสนอ ซึ่งปัจจุบันคือ eSecure หรือโดยการเก็บสำเนาสำรองของข้อมูลของคุณ หรือโดยการสังเกตการแจ้งเตือนที่เกี่ยวข้องกับความปลอดภัยด้านไอทีทั้งหมด (เช่น การแจ้งเตือนฟิชชิ่งบนแอปพลิเคชันออนไลน์)</p>
          <p className="mb-2"><strong>5.4</strong> คุณจะต้องไม่พยายามหรืออนุญาตให้บุคคลที่สาม:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>เข้าถึงข้อมูลอิเล็กทรอนิกส์โดยไม่ได้รับอนุญาต ซึ่งไม่ใช่ข้อมูลของคุณหรือมีไว้สำหรับการใช้งานของคุณ หรือใช้ข้อมูลอิเล็กทรอนิกส์ของบุคคลที่สามโดยไม่ได้รับอนุญาต</li>
            <li>ทำการทดสอบความปลอดภัยใดๆ (เช่น การทดสอบการเจาะระบบ), การทดสอบประสิทธิภาพ (เช่น การทดสอบโหลด), การทดสอบความเครียด หรือการทดสอบที่คล้ายกันบนแอปพลิเคชันออนไลน์</li>
            <li>ใช้ระบบและ/หรือซอฟต์แวร์อัตโนมัติใดๆ (รวมถึง โปรแกรมรวบรวมข้อมูล, สไปเดอร์, บอทค้นหา, ปลั๊กอินเบราว์เซอร์, ส่วนขยาย, ส่วนเสริม หรือวิธีการหรือกระบวนการทางเทคโนโลยีอื่นๆ) เพื่อเข้าถึง, ขูดข้อมูล หรือแก้ไขบริการของ DHL หรือแอปพลิเคชันออนไลน์ หรือเพื่อคัดลอก, เพิ่ม, ดาวน์โหลด หรือดึงเนื้อหาจากแอปพลิเคชันออนไลน์</li>
            <li>แทรกแซง, แก้ไข, ปิดใช้งาน, ขัดขวาง หรือทำลายการเข้าถึงและคุณสมบัติ, ฟังก์ชันการทำงาน หรือการควบคุมความปลอดภัยใดๆ ของแอปพลิเคชันออนไลน์หรือบริการของ DHL</li>
            <li>เอาชนะ, หลีกเลี่ยง, ข้าม, ลบ, ปิดใช้งาน หรือหลบเลี่ยงกลไกการป้องกันใดๆ สำหรับแอปพลิเคชันออนไลน์หรือบริการของ DHL</li>
            <li>แนะนำไวรัส, โทรจัน, เวิร์ม, ระเบิดตรรกะ หรือวัสดุที่เป็นอันตรายทางเทคโนโลยีหรือเป็นอันตรายอื่นๆ หรือทำการโจมตีแบบปฏิเสธการให้บริการ (แบบกระจาย) หรือการโจมตีทางไซเบอร์อื่นๆ</li>
            <li>จัดหา (เช่น โดยวิธีการฟิชชิ่งหรือ (โซเชียล) ฟาร์มมิ่ง) และใช้หรือปรับใช้ข้อมูลประจำตัวผู้ใช้ เช่น ชื่อผู้ใช้, รหัสผ่าน, ข้อมูลบัตรเครดิต</li>
            <li>มีส่วนร่วมในการจารกรรมทางอุตสาหกรรมเพื่อดึงข้อมูลอิเล็กทรอนิกส์ (โดยเฉพาะข้อมูลและ/หรือข้อมูลที่เป็นความลับทางการค้าหรือธุรกิจ) โดยการกระทำใดๆ ข้างต้น</li>
            <li>รวมแอปพลิเคชันออนไลน์หรือบริการของ DHL เข้ากับระบบไอทีหรือใช้งานระบบไอทีในลักษณะที่บุคคลที่สามหรือระบบ/ซอฟต์แwร์อัตโนมัติสามารถเข้าถึงบริการของ DHL หรือแอปพลิเคชันออนไลน์ได้โดยตรงหรือโดยอ้อมโดยไม่ปลอดภัยหรือไม่ได้รับอนุญาต</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">7. การควบคุมการส่งออก, การคว่ำบาตร และกฎหมายศุลกากร</h2>
          <p className="mb-2"><strong>7.1</strong> การควบคุมการส่งออก, การคว่ำบาตรทางเศรษฐกิจ และกฎหมายและข้อบังคับด้านศุลกากรมีผลบังคับใช้กับการให้บริการของ DHL และการเข้าถึงแอปพลิเคชันออนไลน์ของคุณ</p>
          <p><strong>7.2</strong> คุณตกลงที่จะปฏิบัติตามกฎหมายและข้อบังคับว่าด้วยการควบคุมการส่งออกและการคว่ำบาตรทางเศรษฐกิจของ UN, EU, US, UK และอื่นๆ ที่บังคับใช้ทั้งหมด และกฎหมายศุลกากรท้องถิ่น (เรียกรวมกันว่า “กฎหมายการค้า”) คุณรับรองและรับประกันว่าคุณ (และบริษัท, นิติบุคคล หรือบุคคลที่สามใดๆ ที่คุณดำเนินการในนาม) ไม่ได้อยู่ในรายชื่อ κυρώσεων ที่บังคับใช้ใดๆ ในฐานะบุคคลที่ถูกปฏิเสธหรือถูกจำกัด</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">8. การรับประกัน, ความรับผิด และการเรียกร้อง</h2>
          <p className="mb-2"><strong>8.1</strong> ไม่มีข้อมูลใดที่ได้รับผ่านแอปพลิเคชันออนไลน์หรือบริการของ DHL ที่จะสร้างการรับประกันใดๆ ที่ DHL ไม่ได้ระบุไว้อย่างชัดแจ้งในข้อกำหนดเหล่านี้</p>
          <p><strong>8.2</strong> เว้นแต่จะตกลงเป็นอย่างอื่นในคำสั่งบริการเฉพาะและในขอบเขตที่กฎหมายที่ใช้บังคับอนุญาต ไม่ว่าในกรณีใด DHL จะไม่รับผิดต่อการเรียกร้องค่าเสียหายหรือความสูญเสียใดๆ</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">9. สถานการณ์ที่อยู่นอกเหนือการควบคุมของ DHL</h2>
          <p><strong>9.1</strong> DHL จะไม่รับผิดต่อความสูญเสียหรือความเสียหายใดๆ ที่เกิดขึ้นจากสถานการณ์ที่อยู่นอกเหนือการควบคุมของ DHL ซึ่งรวมถึงแต่ไม่จำกัดเพียงภัยธรรมชาติ, การปฏิบัติตามการกระทำใดๆ ของรัฐบาลหรือหน่วยงานอื่น, สงครามหรือภาวะฉุกเฉินของชาติ, การจลาจล, ความไม่สงบในบ้านเมือง, การก่อการร้าย, การกระทำของโจรสลัด, ไฟไหม้, พายุหรือน้ำท่วม, การระเบิด, การกระทำทางอาญา, ปัญหาการกำหนดค่าหรือการทำงานผิดพลาดของเวิร์กสเตชันหรือการเชื่อมต่ออินเทอร์เน็ตของคุณ, การระบาดใหญ่, การระบาด, การปิดงาน, การนัดหยุดงาน และการดำเนินการทางอุตสาหกรรมอื่นๆ</p>
        </section>

        <section>
          <h2 className="font-bold text-lg border-b border-gray-100 pb-2 mb-2">10. การสื่อสารจาก DHL</h2>
          <p>DHL อาจสื่อสารกับคุณผ่านช่องทางการสื่อสารที่คุณระบุไว้ในแอปพลิเคชันออนไลน์ หรือผ่านการแจ้งเตือนหรือข้อความในแอปพลิเคชันออนไลน์</p>
        </section>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-dhl-red rounded-xl">
                <FileText className="w-6 h-6 text-white" />
             </div>
             <h2 className="text-2xl font-black text-gray-800 dark:text-gray-100 uppercase tracking-tight">
               {t('termsTitle')}
             </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-8 h-8 text-gray-400" />
          </button>
        </div>
        
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-grow">
           {language === 'th' ? contentTh : contentEn}
        </div>

        <div className="p-6 border-t dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 flex justify-end gap-3">
           <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors uppercase tracking-widest text-xs">
             {t('backToMain')}
           </button>
           <button onClick={onAccept} className="px-8 py-3 bg-dhl-red text-white rounded-xl font-bold hover:bg-dhl-dark-red shadow-lg shadow-red-500/20 active:scale-95 transition-all flex items-center gap-2 uppercase tracking-widest text-xs">
             <CheckCircle className="w-5 h-5" />
             {language === 'th' ? 'ฉันยอมรับ' : 'I accept'}
           </button>
        </div>
      </div>
    </div>
  );
};
