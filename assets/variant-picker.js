/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product/theme-product.js
/**
 * Returns a product JSON object when passed a product URL
 * @param {*} url
 */
function getProductJson(handle) {
  return fetch('/products/' + handle + '.js').then(function (response) {
    return response.json();
  });
}
/**
 * Find a match in the project JSON (using a ID number) and return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Number} value Accepts Number (e.g. 6908023078973)
 * @returns {Object} The variant object once a match has been successful. Otherwise null will be return
 */

function getVariantFromId(product, value) {
  _validateProductStructure(product);

  if (typeof value !== 'number') {
    throw new TypeError(value + ' is not a Number.');
  }

  var result = product.variants.filter(function (variant) {
    return variant.id === value;
  });
  return result[0] || null;
}
/**
 * Convert the Object (with 'name' and 'value' keys) into an Array of values, then find a match & return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Object} collection Object with 'name' and 'value' keys (e.g. [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }])
 * @returns {Object || null} The variant object once a match has been successful. Otherwise null will be returned
 */

function getVariantFromSerializedArray(product, collection) {
  _validateProductStructure(product); // If value is an array of options


  var optionArray = _createOptionArrayFromOptionCollection(product, collection);

  return getVariantFromOptionArray(product, optionArray);
}
/**
 * Find a match in the project JSON (using Array with option values) and return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Array} options List of submitted values (e.g. ['36', 'Black'])
 * @returns {Object || null} The variant object once a match has been successful. Otherwise null will be returned
 */

function getVariantFromOptionArray(product, options) {
  _validateProductStructure(product);

  _validateOptionsArray(options);

  var result = product.variants.filter(function (variant) {
    return options.every(function (option, index) {
      return variant.options[index] === option;
    });
  });
  return result[0] || null;
}
/**
 * Creates an array of selected options from the object
 * Loops through the project.options and check if the "option name" exist (product.options.name) and matches the target
 * @param {Object} product Product JSON object
 * @param {Array} collection Array of object (e.g. [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }])
 * @returns {Array} The result of the matched values. (e.g. ['36', 'Black'])
 */

function _createOptionArrayFromOptionCollection(product, collection) {
  _validateProductStructure(product);

  _validateSerializedArray(collection);

  var optionArray = [];
  collection.forEach(function (option) {
    for (var i = 0; i < product.options.length; i++) {
      if (product.options[i].name.toLowerCase() === option.name.toLowerCase()) {
        optionArray[i] = option.value;
        break;
      }
    }
  });
  return optionArray;
}
/**
 * Check if the product data is a valid JS object
 * Error will be thrown if type is invalid
 * @param {object} product Product JSON object
 */


function _validateProductStructure(product) {
  if (typeof product !== 'object') {
    throw new TypeError(product + ' is not an object.');
  }

  if (Object.keys(product).length === 0 && product.constructor === Object) {
    throw new Error(product + ' is empty.');
  }
}
/**
 * Validate the structure of the array
 * It must be formatted like jQuery's serializeArray()
 * @param {Array} collection Array of object [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }]
 */


function _validateSerializedArray(collection) {
  if (!Array.isArray(collection)) {
    throw new TypeError(collection + ' is not an array.');
  }

  if (collection.length === 0) {
    return [];
  }

  if (collection[0].hasOwnProperty('name')) {
    if (typeof collection[0].name !== 'string') {
      throw new TypeError('Invalid value type passed for name of option ' + collection[0].name + '. Value should be string.');
    }
  } else {
    throw new Error(collection[0] + 'does not contain name key.');
  }
}
/**
 * Validate the structure of the array
 * It must be formatted as list of values
 * @param {Array} collection Array of object (e.g. ['36', 'Black'])
 */


function _validateOptionsArray(options) {
  if (Array.isArray(options) && typeof options[0] === 'object') {
    throw new Error(options + 'is not a valid array of options.');
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-images/images.js
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  new Image().src = path;
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  const match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];
    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}
;// CONCATENATED MODULE: ./src/js/pages/product/variant-picker.js




if (!customElements.get("variant-picker")) {
  class VariantPicker extends HTMLElement {
    constructor() {
      super();

      _defineProperty(this, "_getBaseUnit", () => {
        return this.currentVariant.unit_price_measurement.reference_value === 1 ? this.currentVariant.unit_price_measurement.reference_unit : this.currentVariant.unit_price_measurement.reference_value + this.currentVariant.unit_price_measurement.reference_unit;
      });

      _defineProperty(this, "hideSoldOutAndUnavailableOptions", () => {
        const classes = {
          soldOut: "variant-picker__option--soldout",
          unavailable: "variant-picker__option--unavailable"
        };
        const variant = this.currentVariant;
        const {
          optionNodes
        } = this.domNodes;
        const {
          productData,
          productData: {
            variants,
            options: {
              length: maxOptions
            }
          }
        } = this;
        optionNodes.forEach(optNode => {
          const {
            optionPosition,
            value
          } = optNode.dataset;
          const optPos = Number(optionPosition);
          const isSelectOption = optNode.tagName === "OPTION";
          let matchVariants = [];

          if (optPos === maxOptions) {
            const optionsArray = Array.from(variant.options);
            optionsArray[maxOptions - 1] = value;
            matchVariants.push(getVariantFromOptionArray(productData, optionsArray));
          } else {
            matchVariants = variants.filter(v => v.options[optPos - 1] === value && v.options[optPos - 2] === variant[`option${optPos - 1}`]);
          }

          matchVariants = matchVariants.filter(Boolean);

          if (matchVariants.length) {
            optNode.classList.remove(classes.unavailable);
            isSelectOption && optNode.removeAttribute("disabled");
            const isSoldOut = matchVariants.every(v => v.available === false);
            const method = isSoldOut ? "add" : "remove";
            optNode.classList[method](classes.soldOut);
          } else {
            optNode.classList.add(classes.unavailable);
            isSelectOption && optNode.setAttribute("disabled", "true");
          }
        });
      });

      this.selectors = {
        container: "[data-variant-picker]",
        productInfo: ".sf-prod__info",
        error: '.prod__form-error',
        variantIdInput: '[name="id"]',
        pickerFields: ["[data-picker-field]"],
        optionNodes: [".variant-picker__option"],
        productSku: "[data-variant-sku]",
        productAvailability: "[data-availability]",
        shareUrlInput: "[data-share-url]",
        stockCountdown: '.prod__stock-countdown'
      };
      this.container = this.closest(this.selectors.container);
      this.productInfo = this.closest(this.selectors.productInfo);
      this.domNodes = queryDomNodes(this.selectors, this.productInfo);
      this.setupData();
    }

    async setupData() {
      this.productId = this.container.dataset.productId;
      this.sectionId = this.container.dataset.section;
      this.productUrl = this.container.dataset.productUrl;
      this.productHandle = this.container.dataset.productHandle;
      this.section = this.container.closest(`[data-section-id="${this.sectionId}"]`);
      this.variantData = this.getVariantData();
      this.productData = await this.getProductJson();
      this.enableVariantGroupImages = this.container.dataset.enableVariantGroupImages;

      if (this.enableVariantGroupImages === 'true') {
        this.variantGroupImages = this.getVariantGroupImageData();
      }

      const selectedVariantId = this.section?.querySelector(this.selectors.variantIdInput)?.value;
      this.currentVariant = this.variantData.find(variant => variant.id === Number(selectedVariantId));
      this.productData.current_variant_id = this.currentVariant.id;
      this.productData.initialVariant = this.currentVariant;

      if (this.currentVariant) {
        this.getDataImageVariant(this.currentVariant.id);
        this.hideSoldOutAndUnavailableOptions();
        this.updateStockCountdownByVariant(this.currentVariant);
        this.updateButton(!this.currentVariant.available, "", false);
      } // Check media gallery inital


      this.check = setInterval(() => {
        this.mediaGallery = this.section.querySelectorAll("media-gallery");

        if (this.mediaGallery) {
          clearInterval(this.check);
          this.mediaGallery?.forEach(media => {
            if (window.getComputedStyle(media).display !== "none") {
              this.layout = media.layout;
              this.media = media;

              if (media.mediaMode === 'slider') {
                this.slides = media.slider?.slides;
                this.slidesNav = media.navSlider?.slides;
              } else {
                this.mediaItems = media.querySelectorAll('.sf-prod-media-item');
              }

              if (this.enableVariantGroupImages === 'true' && this.variantGroupImages?.enable) this.updateMedia();
            }
          });
        }
      }, 100);
      this.initOptionSwatches();
      this.addEventListener("change", this.onVariantChange);
    }

    onVariantChange() {
      this.getSelectedOptions();
      this.getSelectedVariant();
      this.updateButton(true, "", false);
      this.updatePickupAvailability();
      this.removeErrorMessage();

      if (!this.currentVariant) {
        this.updateButton(true, "", true);
        this.setUnavailable();
      } else {
        this.getDataImageVariant(this.currentVariant.id);
        this.updateMedia();
        this.updateBrowserHistory();
        this.updateVariantInput();
        this.updateProductMeta();
        this.updatePrice();
        this.updateButton(!this.currentVariant.available, window.MinimogStrings.soldOut);
        this.hideSoldOutAndUnavailableOptions();
        this.updateStockCountdownByVariant(this.currentVariant);
      }

      window.MinimogEvents.emit(`${this.productId}__VARIANT_CHANGE`, this.currentVariant, this);
    }

    getDataImageVariant(variantId) {
      if (this.variantGroupImages && this.variantGroupImages.enable) {
        this.currentVariantMedia = this.variantGroupImages?.mapping.find(variant => Number(variant.id) === variantId).media;
      }
    }

    getProductJson() {
      return fetch(this.productUrl + ".js").then(function (response) {
        return response.json();
      });
    }

    getSelectedVariant() {
      let variant = getVariantFromOptionArray(this.productData, this.options);
      let options = [...this.options];

      if (!variant) {
        options.pop();
        variant = getVariantFromOptionArray(this.productData, options);

        if (!variant) {
          options.pop();
          variant = getVariantFromOptionArray(this.productData, options);
        }

        this.options = [...variant?.options];
        this.updateSelectedOptions();
      }

      this.currentVariant = variant;
    }

    getSelectedOptions() {
      const pickerFields = Array.from(this.querySelectorAll("[data-picker-field]"));
      this.options = pickerFields.map(field => {
        const type = field.dataset.pickerField;
        if (type === "radio") return Array.from(field.querySelectorAll("input")).find(radio => radio.checked)?.value;
        return field.querySelector("select")?.value;
      });
    }

    updateSelectedOptions() {
      this.domNodes.pickerFields.forEach((field, index) => {
        const selectedValue = field.dataset.selectedValue;

        if (selectedValue !== this.options[index]) {
          const selectedOption = field.querySelector(`input[value="${this.options[index]}"]`);

          if (selectedOption) {
            selectedOption.checked = true;
            field.updateSelectedValue();
          }
        }
      });
    }

    updateMedia() {
      if (!this.currentVariant) return;
      if (!this.currentVariant.featured_media) return;
      let mainItems = [],
          navItems = [];
      let index = 0,
          index0 = 0,
          indexNav = 0,
          indexNav0 = 0;

      if (this.variantGroupImages && this.variantGroupImages.enable && this.currentVariantMedia.length > 0) {
        if (this.media.mediaMode === 'slider') {
          // Re-render main media
          this.slides?.forEach(slide => {
            const dataIdMedia = slide.querySelector('[data-media-id]')?.dataset.mediaId;

            if (this.currentVariantMedia.includes(dataIdMedia)) {
              slide.dataset.swiperSlideIndex = index++;
              slide.dataset.index = index0++;
              if (slide.dataset.swiperSlideIndex === '0') slide.classList.add('swiper-slide-active');
              mainItems.push(slide);
            }

            if (!slide.classList.contains('media-type-image')) {
              slide.dataset.swiperSlideIndex = index++;
              slide.dataset.index = index0++;
              mainItems.push(slide);
            }
          });
          this.media.slider?.removeAllSlides();
          this.media.slider?.appendSlide(mainItems);
          this.media.slider?.slideToLoop(0);
          this.media?.handleSlideChange(); // Re-render nav media

          this.slidesNav?.forEach(slide => {
            const dataIdMedia = slide.querySelector('[data-media-id]')?.dataset.mediaId;

            if (this.currentVariantMedia.includes(dataIdMedia)) {
              slide.dataset.swiperSlideIndex = indexNav++;
              slide.dataset.index = indexNav0++;
              if (slide.dataset.swiperSlideIndex === '0') slide.classList.add('swiper-slide-thumb-active');
              navItems.push(slide);
            }

            if (!slide.classList.contains('media-type-image')) {
              slide.dataset.swiperSlideIndex = indexNav++;
              slide.dataset.index = indexNav0++;
              navItems.push(slide);
            }
          });
          this.media.navSlider?.removeAllSlides();
          this.media.navSlider?.appendSlide(navItems);
          this.media.navSlider?.slideToLoop(0);
          this.media?.removeAttribute('data-media-loading');
          this.media.firstElementChild.style.opacity = 1;
        } else {
          let index = 0;
          const mediaWraper = this.media?.querySelector('.sf-prod-media__wrapper > div');
          this.mediaItems?.forEach(item => {
            const dataIdMedia = item.querySelector('[data-media-id]')?.dataset.mediaId;

            if (this.currentVariantMedia.includes(dataIdMedia)) {
              item.dataset.index = index++;
              mainItems.push(item);
            }

            if (!item.classList.contains('media-type-image')) {
              item.dataset.index = index++;
              mainItems.push(item);
            }
          });
          mediaWraper.innerHTML = '';
          mainItems.forEach(item => {
            if (this.layout == 'layout-2') {
              item.classList.remove('col-span-2');
              const modulo = item.dataset.index % 3;
              if (modulo == 0) item.classList.add('col-span-2');
            }

            mediaWraper.append(item);
          });
          this.media.removeAttribute('data-media-loading');
          this.media.firstElementChild.style.opacity = 1;
        } // Init Lightbox


        const newElements = [];
        this.currentVariantMedia.forEach(item => {
          newElements.push(this.media.productData.media.find(media => media.id === Number(item)));
        });
        this.media?.addEventToMainMedias();
        this.media?.initLightbox(newElements.sort((a, b) => a.position - b.position));
      } else {
        this.media?.setActiveMedia(this.currentVariant);
      }
    }

    updateBrowserHistory() {
      if (!this.currentVariant || this.dataset.updateUrl === "false") return;
      window.history.replaceState({}, "", `${this.productUrl}?variant=${this.currentVariant.id}`);
    }

    updateVariantInput() {
      const productForms = document.querySelectorAll(`#product-form-${this.sectionId}, #product-form-installment`);
      productForms.forEach(productForm => {
        const variantIdInput = productForm.querySelector(this.selectors.variantIdInput);
        variantIdInput.value = this.currentVariant.id;
        variantIdInput.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      });
    }

    updatePickupAvailability() {
      const pickUpAvailability = this.section?.querySelector("pickup-availability");
      if (!pickUpAvailability) return;

      if (this.currentVariant && this.currentVariant.available) {
        pickUpAvailability.fetchAvailability(this.currentVariant.id);
      } else {
        pickUpAvailability.removeAttribute("available");
        pickUpAvailability.innerHTML = "";
      }
    }

    removeErrorMessage() {
      const section = this.closest("section");
      if (!section) return;
      const productForm = section.querySelector("product-form");
      if (productForm) productForm.handleErrorMessage();
    }

    updatePrice() {
      const classes = {
        onSale: "f-price--on-sale",
        soldOut: "f-price--sold-out"
      };
      const selectors = {
        priceWrapper: ".f-price",
        salePrice: ".f-price-item--sale",
        compareAtPrice: [".f-price-item--regular"],
        unitPrice: ".f-price__unit",
        saleBadge: ".f-price__badge-sale",
        saleAmount: "[data-saved-price]"
      };
      const money_format = window.MinimogSettings.money_format;
      const {
        priceWrapper,
        salePrice,
        unitPrice,
        compareAtPrice,
        saleBadge,
        saleAmount
      } = queryDomNodes(selectors, this.productInfo);
      const {
        compare_at_price,
        price,
        unit_price_measurement
      } = this.currentVariant;
      const onSale = compare_at_price && compare_at_price > price;
      const soldOut = !this.currentVariant.available;

      if (onSale) {
        priceWrapper.classList.add(classes.onSale);
      } else {
        priceWrapper.classList.remove(classes.onSale);
      }

      if (soldOut) {
        priceWrapper.classList.add(classes.soldOut);
      } else {
        priceWrapper.classList.remove(classes.soldOut);
      }

      if (priceWrapper) priceWrapper.classList.remove("visibility-hidden");
      if (salePrice) salePrice.innerHTML = formatMoney(price, money_format);

      if (compareAtPrice?.length && compare_at_price > price) {
        compareAtPrice.forEach(item => item.innerHTML = formatMoney(compare_at_price, money_format));
      } else {
        compareAtPrice.forEach(item => item.innerHTML = formatMoney(price, money_format));
      }

      if (saleBadge && compare_at_price > price) {
        let value;
        const saving = (compare_at_price - price) * 100 / compare_at_price;
        value = Math.round(saving) + "%";
        saleAmount.textContent = value;
      }

      if (unit_price_measurement && unitPrice) {
        unitPrice.classList.remove("f-hidden");
        const unitPriceContent = `<span>${formatMoney(this.currentVariant.unit_price, money_format)}</span>/<span data-unit-price-base-unit>${this._getBaseUnit()}</span>`;
        unitPrice.innerHTML = unitPriceContent;
      } else {
        unitPrice?.classList.add("f-hidden");
      }
    }

    updateButton() {
      let disable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      let text = arguments.length > 1 ? arguments[1] : undefined;
      let modifyClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      const productForms = document.querySelectorAll(`.product-form-${this.sectionId}`);
      if (!productForms) return;
      productForms.forEach(productForm => {
        const addButton = productForm.querySelector('[name="add"]');
        const dynamicCheckout = productForm.querySelector('.prod__dynamic_checkout');
        const addButtonText = productForm.querySelector('[name="add"] > span.atc-text');
        const preorder = productForm.dataset.preorder;
        if (!addButton) return;

        if (disable) {
          addButton.setAttribute("disabled", "disabled");
          addButton.classList.add("disabled");
          dynamicCheckout?.classList?.add?.('disabled');
          if (text) addButtonText.textContent = text;
        } else {
          addButton.removeAttribute("disabled");
          addButton.classList.remove("disabled");
          dynamicCheckout?.classList?.remove?.('disabled');

          if (preorder === "true") {
            addButtonText.textContent = window.MinimogStrings.preorder;
          } else {
            addButtonText.textContent = window.MinimogStrings.addToCart;
          }
        }
      });
    }

    updateProductMeta() {
      const {
        available,
        sku,
        noSku
      } = this.currentVariant;
      const {
        inStock,
        outOfStock
      } = window.MinimogStrings;
      const productAvailability = this.section?.querySelector(this.selectors.productAvailability);
      const productSku = this.section?.querySelector(this.selectors.productSku);

      if (productSku) {
        if (sku) {
          productSku.textContent = sku;
        } else {
          productSku.textContent = noSku;
        }
      }

      if (productAvailability) {
        const method = !available ? 'add' : 'remove';
        productAvailability.innerText = available ? inStock : outOfStock;
        productAvailability.classList[method]('prod__availability--outofstock');
      }
    }

    setUnavailable() {
      const button = document.getElementById(`product-form-${this.sectionId}`);
      const addButton = button.querySelector('[name="add"]');
      const addButtonText = button.querySelector('[name="add"] > span.atc-text');
      const priceWrapper = this.section.querySelector(".f-price");
      if (!addButton) return;
      addButtonText.textContent = window.MinimogStrings.unavailable;
      if (priceWrapper) priceWrapper.classList.add("visibility-hidden");
    }

    updateStockCountdownByVariant(variant) {
      const {
        stockCountdown
      } = this.domNodes;

      if (stockCountdown) {
        const method = !variant.available ? "add" : "remove";
        stockCountdown?.classList?.[method]?.("hidden");

        if (stockCountdown.dataset.countdownType === "use_quantity") {
          const countdownNumber = stockCountdown.querySelector("[data-countdown-number]");

          if (countdownNumber) {
            countdownNumber.textContent = variant.inventory_quantity > 0 ? variant.inventory_quantity : variant.id.toString().split("")[13] - -1;
          }
        }
      }
    }

    getVariantData() {
      this.variantData = this.variantData || JSON.parse(this.container.querySelector('#productVariants[type="application/json"]').textContent);
      return this.variantData;
    }

    getVariantGroupImageData() {
      this.variantGroupImages = this.variantGroupImages || JSON.parse(this.container.querySelector('#variantGroup[type="application/json"]').textContent);
      return this.variantGroupImages;
    }

    initOptionSwatches() {
      const {
        _colorSwatches = [],
        _imageSwatches = []
      } = window.MinimogSettings;
      this.domNodes.optionNodes.forEach(optNode => {
        const {
          optionType,
          optionPosition,
          value: optionValue
        } = optNode?.dataset;
        const optionValueLowerCase = optionValue?.toLowerCase();
        const variantToShowSwatchImage = this.variantData.find(v => v[`option${optionPosition}`] === optionValue);
        const variantImage = variantToShowSwatchImage?.featured_image?.src ? getSizedImageUrl(variantToShowSwatchImage?.featured_image?.src, '100x') : '';
        const customImage = _imageSwatches.find(i => i.key === optionValueLowerCase)?.value;
        const customColor = _colorSwatches.find(c => c.key === optionValueLowerCase)?.value;
        if (variantImage || customImage) optNode.querySelector("label")?.classList.add("has-bg-img");

        switch (optionType) {
          case "default":
            optNode.querySelector("label").style.backgroundImage = `url(${customImage || variantImage || ""})`;
            break;

          case "image":
            optNode.querySelector("label").style.backgroundImage = `url(${variantImage || customImage || ""})`;
            break;

          case "color":
            optNode.querySelector("label").style.backgroundColor = customColor ? customColor : optionValueLowerCase;
            if (customImage) optNode.querySelector("label").style.backgroundImage = `url(${customImage})`;
            break;

          default:
            break;
        }
      });
    }

  }

  customElements.define("variant-picker", VariantPicker);
}

if (!customElements.get("variant-button")) {
  class VariantButton extends HTMLElement {
    constructor() {
      super();
      this.selectedSpan = this.querySelector(".selected-value");
      this.addEventListener("change", this.updateSelectedValue);
    }

    updateSelectedValue() {
      this.value = Array.from(this.querySelectorAll("input")).find(radio => radio.checked).value;
      this.setAttribute("data-selected-value", this.value);
      if (this.selectedSpan) this.selectedSpan.textContent = this.value;
    }

  }

  customElements.define("variant-button", VariantButton);

  if (!customElements.get("variant-select")) {
    class VariantSelect extends VariantButton {
      constructor() {
        super();
      }

      updateSelectedValue() {
        this.value = this.querySelector("select").value;
        this.setAttribute("data-selected-value", this.value);
        if (this.selectedSpan) this.selectedSpan.textContent = this.value;
      }

    }

    customElements.define("variant-select", VariantSelect);
  }

  if (!customElements.get("variant-image")) {
    class VariantImage extends VariantButton {
      constructor() {
        super();
      }

    }

    customElements.define("variant-image", VariantImage);
  }

  if (!customElements.get("variant-color")) {
    class VariantColor extends VariantButton {
      constructor() {
        super();
      }

    }

    customElements.define("variant-color", VariantColor);
  }
}
/******/ })()
;