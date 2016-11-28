namespace xadesjs.pro {

    export class OtherCertificateCollection extends Collection<OtherCertificate> { }

	/**
	 * The OtherCertificate element is a placeholder for potential future
	 * new formats of certificates
	 */
    export class OtherCertificate extends XmlXadesObject {

        // Public properties
		/**
		 * The generic XML element that represents any certificate
		 */
        public AnyXmlElement: Element;

        // Protected methods

        protected GetXmlObjectName() {
            return XmlXades.ElementNames.OtherCertificate;
        }

        // Public methods
		/**
		 * Check to see if something has changed in this instance and needs to be serialized
         * @returns Flag indicating if a member needs serialization
		 */
        public HasChanged(): boolean {
            let retVal = false;

            if (this.AnyXmlElement != null) {
                retVal = true;
            }

            return retVal;
        }

		/**
		 * Load state from an XML element
         * @param {Element} element XML element containing new state
		 */
        public LoadXml(element: Element): void {
            this.AnyXmlElement = element;
        }

		/**
		 * Returns the XML representation of the this object
         * @returns XML element containing the state of this object
		 */
        public GetXml(): Element {
            let document = this.CreateDocument();
            let element = this.CreateElement(document);

            if (this.AnyXmlElement != null) {
                element.appendChild(document.importNode(this.AnyXmlElement, true));
            }

            return element;
        }

    }
}
